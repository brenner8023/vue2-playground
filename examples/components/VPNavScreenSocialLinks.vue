<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useConfig } from "../composables/config";
import _VCVSocialLinks from "./VCVSocialLinks.vue";

export default defineComponent({
  components: {
    VCVSocialLinks: _VCVSocialLinks as any,
  },
  setup(props) {
    const { config } = useConfig();
    return {
      config,
    };
  },
});
</script>

<template>
  <VCVSocialLinks
    v-if="config.socialLinks"
    class="VPNavScreenSocialLinks"
    size="medium"
    :links="config.socialLinks"
  />
</template>
