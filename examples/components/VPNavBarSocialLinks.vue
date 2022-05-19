<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import _VCVSocialLinks from "./VCVSocialLinks.vue";
import { useConfig } from "../composables/config";
import {
  SocialLinkSize,
  SocialLink,
  SocialLinkIcon,
} from "../types/socialLink";

export default defineComponent({
  components: { VCVSocialLinks: _VCVSocialLinks as any },
  setup(props) {
    // const { config } = useConfig();
    var config = {
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/andurils/vue-code-view",
        },
        {
          icon: "languages",
          link: "https://staging-cn.vuejs.org/guide/typescript/options-api.html#typing-component-props",
        },
      ] as SocialLink[],
    };

    return {
      config,
    };
  },
});
</script>

<template>
  <VCVSocialLinks
    v-if="config.socialLinks"
    class="VPNavBarSocialLinks"
    size="small"
    :links="config.socialLinks"
  />
</template>

<style scoped>
.VPNavBarSocialLinks {
  display: none;
  margin-right: -10px;
}

@media (min-width: 1280px) {
  .VPNavBarSocialLinks {
    display: flex;
  }
}
</style>
