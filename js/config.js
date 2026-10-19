// Central public configuration. Update these values if repository names change.
export const CONFIG = Object.freeze({
  owner: "triagantaraga24",
  contentRepo: "portfolio-content",
  branch: "main",
  dataPath: "data/portfolio.json",
  refreshIntervalMs: 90_000,
  publicRepoUrl: "https://github.com/triagantaraga24/Portfolio",
  adminUrl: "https://triagantaraga24.github.io/Portfolio-Admin/"
});

export function getRawDataUrl(cacheBust = true) {
  const base = `https://raw.githubusercontent.com/${CONFIG.owner}/${CONFIG.contentRepo}/${CONFIG.branch}/${CONFIG.dataPath}`;
  return cacheBust ? `${base}?v=${Date.now()}` : base;
}
