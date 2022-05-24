<script lang="ts">
import { defineComponent, PropType, inject } from "@vue/composition-api";
import { MenuItemWithLink } from "../types/menu";
import { useData } from "../composables/config";
import { isActive } from "../utils/utils";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<MenuItemWithLink>,
      required: true,
    },
  },
  setup(props) {
    const { page } = useData();
    const closeSideBar = inject("close-sidebar") as () => void;

    return {
      isActive,
      page,
      closeSideBar,
    };
  },
});
</script>

<template>
  <!-- :href="item.link" -->
  <a
    :class="{ link: true, active: isActive(page.relativePath, item.link) }"
    @click="closeSideBar"
  >
    <p class="link-text">{{ item.text }}</p>
  </a>
</template>

<style scoped>
.link {
  display: block;
  padding: 6px 0;
}

@media (min-width: 960px) {
  .link {
    padding: 4px 0;
  }
}

.link:hover .link-text {
  color: var(--vt-c-brand-text-1);
  transition: color 0.25s;
}

.link.active .link-text {
  font-weight: 600;
  color: var(--vt-c-brand);
  transition: color 0.25s;
}

.link-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
}
</style>
