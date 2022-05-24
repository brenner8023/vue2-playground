<script lang="ts">
import { defineComponent, PropType, inject } from "@vue/composition-api";
import { MenuItemWithLink } from "../types/menu";
import { useData } from "../composables/config";
import { isActive } from "../utils/utils";
import _VPSidebarLink from "./VPSidebarLink.vue";

export default defineComponent({
  components: {
    VPSidebarLink: _VPSidebarLink as any,
  },
  props: {
    text: {
      type: String,
      required: true,
    },

    items: {
      type: Array as PropType<MenuItemWithLink[]>,
      // required: true,
    },
  },
  setup(props) {
    const { page } = useData();

    const hasActiveLink = () => {
      const { relativePath } = page;
      return props.items?.some((item) => isActive(relativePath, item.link));
    };

    return {
      isActive,
      page,
      hasActiveLink,
    };
  },
});
</script>

<template>
  <section class="VPSidebarGroup">
    <div class="title">
      <h2 class="title-text" :class="{ active: hasActiveLink() }">
        {{ text }}
      </h2>
    </div>

    <template v-for="item in items">
      <VPSidebarLink :item="item" :key="item.link" />
    </template>
  </section>
</template>

<style scoped>
.title {
  padding: 6px 0;
}

@media (min-width: 960px) {
  .title {
    padding: 4px 0;
  }
}

.title-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
}
</style>
