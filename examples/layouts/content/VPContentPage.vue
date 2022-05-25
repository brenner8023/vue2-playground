<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useData } from "@examples/composables/config";
import _VPFooter from "./VPFooter.vue";

export default defineComponent({
  components: {
    VPFooter: _VPFooter as any,
  },
  setup() {
    const { frontmatter } = useData();
    return {
      frontmatter,
    };
  },
});
</script>

<template>
  <div class="VPContentPage">
    <main>
      <router-view></router-view>
    </main>

    <slot name="footer-before" />
    <VPFooter v-if="frontmatter.isShowFooter !== false" />
    <slot name="footer-after" />
  </div>
</template>
