export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/excursions",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/bergen-shore-excursions",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/fjord-cruise-to-mostraumen",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/bergen-funicular-railway",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/bergen-walking-tour",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/mount-floyen-viewpoint",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/private-bergen-sightseeing",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/bergen-port-guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/one-day-in-bergen",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/is-bergen-worth-visiting",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/best-time-to-visit-bergen",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/ship-schedule",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/bergen-city-or-fjord",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/about",
    priority: 0.5,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/contact",
    priority: 0.5,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/privacy",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/terms",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
] as const;
