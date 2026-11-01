export const LUCIDE_VERSION = "1.39.0";

export const LUCIDE_INDEX_URL = `https://cdn.jsdelivr.net/npm/lucide-static@${LUCIDE_VERSION}/tags.json`;
export const LUCIDE_ICON_BASE = `https://cdn.jsdelivr.net/npm/lucide-static@${LUCIDE_VERSION}/icons/`;

export const ICONIFY_HOST = "https://api.iconify.design";

export const LOGOS_PREFIX = "logos";
export const GCP_PREFIX = "gcp";

export const ICONIFY_PREFIXES: Readonly<Record<"logos" | "gcp", string>> = {
    logos: LOGOS_PREFIX,
    gcp: GCP_PREFIX,
};
