import { SidebarConfig, SidebarGroup } from "@examples/types/config";
import { ensureStartingSlash } from "./support";

/**
 * Get the `SidebarConfig` from sidebar option. This method will ensure to get
 * correct sidebar config from `MultiSideBarConfig` with various path
 * combinations such as matching `guide/` and `/guide/`. If no matching config
 * was found, it will return empty array.
 */
export function getSidebar(
  sidebar: SidebarConfig,
  path: string
): SidebarGroup[] {
  if (Array.isArray(sidebar)) {
    return sidebar;
  }

  path = ensureStartingSlash(path);

  for (const dir in sidebar) {
    // make sure the multi sidebar key starts with slash too
    if (path.startsWith(ensureStartingSlash(dir))) {
      return sidebar[dir];
    }
  }

  return [];
}
