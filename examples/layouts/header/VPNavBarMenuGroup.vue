<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { NavItemWithChildren } from "@examples/types/config";
import { useData } from "@examples/composables/config";
import _VCVFlyout from "@examples/components/VCVFlyout.vue";
import { isActive } from "@examples/utils/utils";

export default defineComponent({
  components: { VCVFlyout: _VCVFlyout as any },
  props: {
    item: {
      type: Object as PropType<NavItemWithChildren>,
      required: true,
    },
  },
  setup(props) {
    const { page } = useData();
    return {
      page,
      isActive,
    };
  },
});
</script>

<template>
  <VCVFlyout
    :class="{
      VPNavBarMenuGroup: true,
      active: isActive(page.relativePath, item.activeMatch, true),
    }"
    :button="item.text"
    :items="item.items"
  />
</template>

<style scoped>
.VPNavBarMenuGroup.active {
  border-bottom: 1px solid var(--vt-c-brand);
  height: var(--vt-nav-height);
}
</style>
