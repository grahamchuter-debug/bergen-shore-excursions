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
] as const;
