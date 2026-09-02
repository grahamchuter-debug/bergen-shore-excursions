/**
 * Temporary Bergen visual QA harness (not part of production runtime).
 * Uses system Chrome + puppeteer-core against a local static preview.
 */
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, ".qa-artifacts");
const base = process.env.QA_BASE_URL || "http://127.0.0.1:4173";
const chrome =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const viewports = [
  { name: "390", width: 390, height: 844 },
  { name: "430", width: 430, height: 932 },
  { name: "768", width: 768, height: 1024 },
  { name: "1440", width: 1440, height: 900 },
];

const pages = [
  { path: "/", label: "home" },
  { path: "/excursions", label: "excursions" },
  { path: "/bergen-shore-excursions", label: "shore-hub" },
  { path: "/excursions/fjord-cruise-to-mostraumen", label: "mostraumen" },
  { path: "/bergen-port-guide", label: "port-guide" },
  { path: "/one-day-in-bergen", label: "one-day" },
  { path: "/bergen-city-or-fjord", label: "city-fjord" },
  { path: "/ship-schedule", label: "schedule-hub" },
  { path: "/ship-schedule/july-2026", label: "month-busy" },
  { path: "/ship-schedule/january-2027", label: "month-light" },
  { path: "/about", label: "about" },
  { path: "/contact", label: "contact" },
  { path: "/privacy", label: "privacy" },
  { path: "/terms", label: "terms" },
];

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const findings = [];

function note(level, message) {
  findings.push({ level, message });
  console.log(`[${level}] ${message}`);
}

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

try {
  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });

    for (const route of pages) {
      const url = `${base}${route.path}`;
      const response = await page.goto(url, {
        waitUntil: "networkidle2",
        timeout: 60000,
      });
      const status = response?.status() ?? 0;
      if (status >= 400) {
        note("FAIL", `${route.path} @${vp.name} status ${status}`);
        continue;
      }

      const metrics = await page.evaluate(() => {
        const doc = document.documentElement;
        const body = document.body;
        const overflowX = Math.max(doc.scrollWidth, body.scrollWidth) > window.innerWidth + 1;
        const bookHits = Array.from(document.querySelectorAll("a,button")).filter((el) =>
          /BOOK NOW|Book a Tour|CHECK AVAILABILITY|RESERVE/i.test(el.textContent || ""),
        ).map((el) => (el.textContent || "").trim());
        const email = Array.from(document.querySelectorAll('a[href^="mailto:"]')).map((a) => ({
          href: a.getAttribute("href"),
          text: (a.textContent || "").trim(),
        }));
        const brokenImgs = Array.from(document.images)
          .filter((img) => !img.complete || img.naturalWidth === 0)
          .map((img) => img.src);
        const h1 = document.querySelector("h1")?.textContent?.trim() || "";
        return {
          overflowX,
          bookHits,
          email,
          brokenImgs,
          h1,
          title: document.title,
        };
      });

      if (metrics.overflowX) {
        note("FAIL", `horizontal overflow ${route.path} @${vp.name}`);
      }

      if (metrics.bookHits.length) {
        note("FAIL", `banned CTA on ${route.path} @${vp.name}: ${metrics.bookHits.join(" | ")}`);
      }

      if (metrics.brokenImgs.length) {
        note(
          "WARN",
          `broken/empty images ${route.path} @${vp.name}: ${metrics.brokenImgs.slice(0, 3).join(", ")}`,
        );
      }

      if (route.label === "contact") {
        const ok = metrics.email.some(
          (e) =>
            e.href === "mailto:hello@bergenshoreexcursions.com" &&
            e.text.includes("hello@bergenshoreexcursions.com"),
        );
        if (!ok) {
          note("FAIL", `contact email/mailto missing @${vp.name}: ${JSON.stringify(metrics.email)}`);
        } else {
          note("PASS", `contact email visible @${vp.name}`);
        }
      }

      // Screenshot key pages at all widths; all pages at 390 + 1440
      const shouldShot =
        ["home", "schedule-hub", "month-busy", "city-fjord", "contact", "excursions"].includes(
          route.label,
        ) ||
        vp.name === "390" ||
        vp.name === "1440";
      if (shouldShot) {
        const file = path.join(outDir, `${route.label}-${vp.name}.png`);
        await page.screenshot({ path: file, fullPage: false });
      }
    }

    // Mobile menu open state checks
    if (vp.width <= 430) {
      await page.goto(`${base}/`, { waitUntil: "networkidle2" });
      const menuBtn = await page.$('button[aria-controls="mobile-nav"]');
      if (!menuBtn) {
        note("FAIL", `mobile menu button missing @${vp.name}`);
      } else {
        await menuBtn.click();
        await page.waitForSelector("#mobile-nav", { visible: true });
        const menuOpen = await page.evaluate(() => {
          const nav = document.getElementById("mobile-nav");
          const overflowX =
            Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) >
            window.innerWidth + 1;
          const links = Array.from(nav?.querySelectorAll("a") || []).map((a) =>
            (a.textContent || "").trim(),
          );
          return { overflowX, links, hidden: nav?.classList.contains("hidden") };
        });
        if (menuOpen.hidden) note("FAIL", `mobile menu still hidden after open @${vp.name}`);
        if (menuOpen.overflowX) note("FAIL", `overflow with menu open @${vp.name}`);
        if (!menuOpen.links.includes("Ship schedule")) {
          note("WARN", `expected Ship schedule in mobile menu @${vp.name}`);
        } else {
          note("PASS", `mobile menu opens @${vp.name}`);
        }
        await page.screenshot({
          path: path.join(outDir, `home-menu-open-${vp.name}.png`),
          fullPage: false,
        });
      }
    }

    // Schedule search empty state on busy month
    if (vp.name === "390" || vp.name === "1440") {
      await page.goto(`${base}/ship-schedule/july-2026`, { waitUntil: "networkidle2" });
      const search = await page.$('input[type="search"]');
      if (search) {
        await search.click({ clickCount: 3 });
        await search.type("zzzz-no-ship");
        await page.waitForFunction(() =>
          document.body.innerText.includes("No ships match your search"),
        );
        note("PASS", `schedule empty search works @${vp.name}`);
        await page.screenshot({
          path: path.join(outDir, `schedule-empty-search-${vp.name}.png`),
          fullPage: false,
        });
      } else {
        note("FAIL", `schedule search input missing @${vp.name}`);
      }
    }

    await page.close();
  }
} finally {
  await browser.close();
}

writeFileSync(path.join(outDir, "findings.json"), JSON.stringify(findings, null, 2));
const fails = findings.filter((f) => f.level === "FAIL");
console.log(`\nFindings: ${findings.length}, fails: ${fails.length}`);
console.log(`Artifacts: ${outDir}`);
if (fails.length) process.exit(1);
