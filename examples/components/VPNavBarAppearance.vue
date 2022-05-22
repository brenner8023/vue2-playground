<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import VCVSwitchAppearance from "./VCVSwitchAppearance.vue";
import { useConfig } from "../composables/config";

export default defineComponent({
  components: { VCVSwitchAppearance },
  setup() {
    const { config } = useConfig();

    return {
      config,
    };
  },
});
</script>

<template>
  <div v-if="config.appearance" class="VPNavBarAppearance">
    <VCVSwitchAppearance />
  </div>
</template>

<style scoped>
.VPNavBarAppearance {
  display: none;
}

@media (min-width: 1280px) {
  .VPNavBarAppearance {
    display: block;
  }
}
</style>
