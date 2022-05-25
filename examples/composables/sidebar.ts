import { ref, computed } from "@vue/composition-api";
import { getSidebar } from "../utils/sidebar";
import { useConfig, useData } from "./config";

export function useSidebar() {
  // const route = useRoute();
  const { config } = useConfig();
  const { frontmatter } = useData();

  const isOpen = ref(false);

  const sidebar = computed(() => {
    const sidebarConfig = config.sidebar;
    // const relativePath = route.data.relativePath;
    const relativePath = "/guide/";

    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });

  // const hasSidebar = computed(
  //   () => frontmatter.sidebar !== false && sidebar.value.length > 0
  // );
  const hasSidebar = true;

  function open() {
    console.log(`useSidebar`, isOpen);
    isOpen.value = true;
  }

  function close() {
    isOpen.value = false;
  }

  function toggle() {
    isOpen.value ? close() : open();
  }

  return {
    isOpen,
    sidebar,
    hasSidebar,
    open,
    close,
    toggle,
  };
}
