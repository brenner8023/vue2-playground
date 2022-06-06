<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { MenuItemWithLink } from "@examples/types/menu";
import { DropdownItemWithLink, DropdownItemChild } from "types/vcv";
import _VCVLink from "@examples/components/VCVLink.vue";

export default defineComponent({
  components: { VCVLink: _VCVLink as any },
  props: {
    item: {
      type: Object as PropType<DropdownItemWithLink>,
      required: true,
    },
  },
});
</script>

<template>
  <!-- <VCVLink class="vt-menu-link" :href="item.link">
    {{ item.text }}
  </VCVLink> -->
  <div class="vt-menu-link">{{ item.label }}</div>
</template>
