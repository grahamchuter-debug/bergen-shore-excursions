export type PlannerExcursionLink = {
  label: string;
  href?: string;
};

export type PortTimeTier = {
  minHours: number;
  maxHours: number | null;
  label: string;
  confidenceScore: number;
  confidenceLabel: string;
  confidenceMessage: string;
  excursions: readonly PlannerExcursionLink[];
  dayPlan: readonly string[];
  conversionNote?: string;
};

export type CruisePortDayPlannerConfig = {
  portName: string;
  heading: string;
  subtitle: string;
  supportingCopy: string;
  returnBufferNote: string;
  tiers: readonly PortTimeTier[];
};

export const bergenPortDayPlannerConfig: CruisePortDayPlannerConfig = {
  portName: "Bergen",
  heading: "Bergen Cruise Smart Planner™",
  subtitle: "Plan your shore excursions around your actual time in port.",
  supportingCopy: "Built specifically for cruise passengers visiting Bergen.",
  returnBufferNote:
    "Always confirm your cruise line's official all-aboard time, as this may be earlier than the published departure time.",
  tiers: [
    {
      minHours: 0,
      maxHours: 4,
      label: "Under 4 hours",
      confidenceScore: 40,
      confidenceLabel: "Limited Port Call",
      confidenceMessage:
        "Best suited to a compact city walk or self-guided Bryggen and harbour sightseeing.",
      excursions: [
        {
          label: "Bergen Walking Tour",
          href: "/excursions/bergen-walking-tour",
        },
        { label: "Bryggen and harbour sightseeing" },
      ],
      dayPlan: [
        "Disembark promptly and stay within walking distance of Vågen harbour",
        "Choose a 2-hour guided walk or a self-guided loop through Bryggen and Torget",
        "Skip Mostraumen fjord cruises and Mount Fløyen, not enough margin",
        "Be back at the gangway by your recommended return time",
      ],
    },
    {
      minHours: 4,
      maxHours: 6,
      label: "4–6 hours",
      confidenceScore: 65,
      confidenceLabel: "Short but Usable Port Call",
      confidenceMessage:
        "Good for a walking tour, Mount Fløyen viewpoint, or a carefully timed city tour with funicular.",
      excursions: [
        {
          label: "Bergen Walking Tour",
          href: "/excursions/bergen-walking-tour",
        },
        {
          label: "Mount Fløyen Viewpoint",
          href: "/excursions/mount-floyen-viewpoint",
        },
        {
          label: "Best of Bergen with Funicular Railway",
          href: "/excursions/bergen-funicular-railway",
        },
      ],
      dayPlan: [
        "Arrive in Bergen and head to your excursion meeting point",
        "Morning or early afternoon: walking tour or Fløibanen ride to Mount Fløyen",
        "Add the funicular city tour only if return times are confirmed",
        "Allow 45 minutes before all aboard to reach the cruise port",
      ],
    },
    {
      minHours: 6,
      maxHours: 10,
      label: "6–10 hours",
      confidenceScore: 90,
      confidenceLabel: "Strong Port Call",
      confidenceMessage:
        "Enough time for the Mostraumen fjord cruise, a funicular city tour, or walking tour with sensible return buffer.",
      excursions: [
        {
          label: "Fjord Cruise to Mostraumen",
          href: "/excursions/fjord-cruise-to-mostraumen",
        },
        {
          label: "Best of Bergen with Funicular Railway",
          href: "/excursions/bergen-funicular-railway",
        },
        {
          label: "Bergen Walking Tour",
          href: "/excursions/bergen-walking-tour",
        },
      ],
      dayPlan: [
        "Arrive in Bergen and confirm your first excursion departure",
        "Morning: Mostraumen fjord cruise or Best of Bergen funicular tour",
        "Midday: Lunch near Torget or Bryggen",
        "Afternoon: Walking tour or Mount Fløyen if time allows",
        "Return to port by recommended return time",
      ],
    },
    {
      minHours: 10,
      maxHours: null,
      label: "10+ hours",
      confidenceScore: 95,
      confidenceLabel: "Excellent Full Day",
      confidenceMessage:
        "Ideal for combining a fjord cruise with city sightseeing, private touring, or walking tour plus Mount Fløyen.",
      conversionNote:
        "Most cruise passengers with 8+ hours in Bergen choose the Mostraumen fjord cruise as their headline shore excursion.",
      excursions: [
        {
          label: "Fjord Cruise to Mostraumen",
          href: "/excursions/fjord-cruise-to-mostraumen",
        },
        {
          label: "Best of Bergen with Funicular Railway",
          href: "/excursions/bergen-funicular-railway",
        },
        {
          label: "Private Bergen Sightseeing",
          href: "/excursions/private-bergen-sightseeing",
        },
        {
          label: "Walking tour + Mount Fløyen combination",
          href: "/excursions/bergen-walking-tour",
        },
      ],
      dayPlan: [
        "Arrive early and confirm your first excursion departure",
        "Morning: Mostraumen fjord cruise from Zachariasbryggen",
        "Midday: Lunch in Bryggen or at the Fish Market",
        "Afternoon: Private sightseeing, funicular tour, or walking tour plus Fløyen",
        "Keep the final hour free near the cruise port for a calm return to ship",
      ],
    },
  ],
};

export const RECOMMENDED_RETURN_BUFFER_MINUTES = 45;
export const LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES = 30;

export function parseTimeToMinutes(time: string): number | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time.trim());

  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  if (hours > 23 || minutes > 59) {
    return null;
  }

  return hours * 60 + minutes;
}

export function formatTimeLabel(time: string): string {
  const minutes = parseTimeToMinutes(time);
  if (minutes === null) {
    return time;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

export function subtractMinutesFromTime(
  time: string,
  subtractMinutes: number,
): string | null {
  const totalMinutes = parseTimeToMinutes(time);
  if (totalMinutes === null) {
    return null;
  }

  let result = totalMinutes - subtractMinutes;
  if (result < 0) {
    result += 24 * 60;
  }

  const hours = Math.floor(result / 60) % 24;
  const minutes = result % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function calculatePortMinutes(
  arrival: string,
  departure: string,
): number | null {
  const arrivalMinutes = parseTimeToMinutes(arrival);
  const departureMinutes = parseTimeToMinutes(departure);

  if (arrivalMinutes === null || departureMinutes === null) {
    return null;
  }

  let diff = departureMinutes - arrivalMinutes;

  if (diff <= 0) {
    diff += 24 * 60;
  }

  return diff;
}

export function formatPortDuration(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  }

  if (minutes === 0) {
    return `${hours} hour${hours === 1 ? "" : "s"}`;
  }

  return `${hours} hour${hours === 1 ? "" : "s"} ${minutes} minute${minutes === 1 ? "" : "s"}`;
}

export function getTierForPortMinutes(
  totalMinutes: number,
  tiers: readonly PortTimeTier[],
): PortTimeTier {
  const hours = totalMinutes / 60;

  return (
    tiers.find((tier) => {
      const meetsMinimum = hours >= tier.minHours;
      const belowMaximum = tier.maxHours === null || hours < tier.maxHours;
      return meetsMinimum && belowMaximum;
    }) ?? tiers[tiers.length - 1]
  );
}

export function getReturnGuidance(departure: string) {
  return {
    departureLabel: formatTimeLabel(departure),
    recommendedReturn: subtractMinutesFromTime(
      departure,
      RECOMMENDED_RETURN_BUFFER_MINUTES,
    ),
    latestComfortableReturn: subtractMinutesFromTime(
      departure,
      LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES,
    ),
  };
}

export function getConfidenceTone(score: number): {
  badge: string;
  bar: string;
} {
  if (score >= 90) {
    return { badge: "bg-emerald-100 text-emerald-800", bar: "bg-emerald-500" };
  }
  if (score >= 65) {
    return { badge: "bg-amber-100 text-amber-800", bar: "bg-amber-500" };
  }
  return { badge: "bg-orange-100 text-orange-800", bar: "bg-orange-500" };
}
