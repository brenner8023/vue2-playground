<template>
  <div id="app" class="VPApp" :class="{ 'is-component': isComponent }">
    <!-- VTBackdrop -->
    <!-- barner 信息提示 -->
    <!-- <slot name="banner" /> -->
    <!-- <main-header :is-home="isHome"></main-header> -->
    <VPNav />
    <!-- Sidebar fixed -->
    <VPLocalNav :open="isSidebarOpen" @open-menu="openSidebar" />
    <!-- <VPSidebar :open="isSidebarOpen">
      <template #top> </template>
      <template #bottom> </template>
    </VPSidebar> -->
    <VPContent />

    <!-- VPContent -->
    <!-- VPContent- VPNotFound  -->
    <!-- VPContent-VPContentPage  -->
    <!-- VPContent- VPContentDoc -->

    <!-- <div>
      <router-view :class="{ 'markdown-body': isChangelog }"></router-view>
    </div> -->

    <!-- 首页显示 -->
    <!-- footer-before  -->
    <!-- <VPFooter v-if="frontmatter.footer !== false" /> -->
    <VPFooter v-if="isHome || isChangelog" />
    <!-- footer-after -->
    <!-- <main-footer v-if="isHome || isChangelog"></main-footer> -->
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  watchEffect,
  provide,
} from "@vue/composition-api";
import { useSidebar } from "./composables/sidebar";

export default defineComponent({
  name: "App",
  components: {
    VPNav: () => import("./components/VPNav.vue"),
    VPLocalNav: () => import("./components/VPLocalNav.vue"),
    VPFooter: () => import("./components/VPFooter.vue"),
    VPContent: () => import("./components/VPContent.vue"),
    VPSidebar: () => import("./components/VPSidebar.vue"),
  },

  setup(_, { root }) {
    // https://stackoverflow.com/questions/53126710/how-to-get-current-name-of-route-in-vue
    // watchEffect(() => {
    //   triggerElement = isSidebarOpen.value
    //     ? (document.activeElement as HTMLButtonElement)
    //     : undefined;
    // });

    onMounted(() => {
      console.log("vcv is mounted!");
    });

    const isComponent = computed(
      () =>
        // return /^component-/.test(this.$route.name || "");
        root.$route.path.indexOf("component") > -1
    );
    const isRepl = computed(() => root.$route.path.indexOf("repl") > -1);
    const isChangelog = computed(() =>
      /^changelog/.test(root.$route.name || "")
    );
    const isHome = computed(
      () =>
        // return /^home/.test(this.$route.name || "");
        root.$route.path.length <= 1
    );

    // 解构
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar,
    } = useSidebar();

    provide("close-sidebar", closeSidebar);
    return {
      isComponent,
      isRepl,
      isChangelog,
      isHome,
      // Sidebar
      isSidebarOpen,
      openSidebar,
      closeSidebar,
    };
  },
});
</script>

<style scoped>
.VPApp {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--vt-c-bg);
  transition: background-color 0.5s;
  padding-top: var(--vt-banner-height);
}

.backdrop {
  z-index: var(--vp-z-index-backdrop);
}

.markdown-body {
  box-sizing: border-box;
  max-width: 980px;
  margin: 0 auto;
  padding: 40px;
}
</style>
