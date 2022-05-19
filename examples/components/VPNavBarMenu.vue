<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useConfig } from "../composables/config";
import _VPNavBarMenuLink from "./VPNavBarMenuLink.vue";
import _VPNavBarMenuGroup from "./VPNavBarMenuGroup.vue";

export default defineComponent({
  components: {
    VPNavBarMenuLink: _VPNavBarMenuLink as any,
    VPNavBarMenuGroup: _VPNavBarMenuGroup as any,
  },
  setup() {
    const { config } = useConfig();
    return {
      config,
    };
  },
});
</script>

<template>
  <nav
    v-if="config.nav"
    aria-labelledby="main-nav-aria-label"
    class="VPNavBarMenu"
  >
    <span id="main-nav-aria-label" class="visually-hidden"
      >Main Navigation</span
    >
    <template v-for="item in config.nav">
      <VPNavBarMenuLink v-if="'link' in item" :item="item" :key="item.text" />
      <VPNavBarMenuGroup v-else :item="item" :key="item.text" />
    </template>
  </nav>
</template>

<style scoped>
.VPNavBarMenu {
  display: none;
}

@media (min-width: 768px) {
  .VPNavBarMenu {
    display: flex;
  }
}
</style>
