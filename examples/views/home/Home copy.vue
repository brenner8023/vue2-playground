<!-- 参考 https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/Home.vue -->
<script lang="ts">
import HomeHero from "./HomeHero.vue";
import HomeFeatures from "./HomeFeatures.vue";
import HomeFooter from "./HomeFooter.vue";
</script>

<template>
  <main class="home" aria-labelledby="main-title">
    <HomeHero />
    <HomeFeatures />
    <!-- home-content -->
    <HomeFooter />
  </main>
</template>

<style scoped>
.home {
  padding-top: var(--header-height);
}
.home-content {
  max-width: 960px;
  margin: 0px auto;
  padding: 0 1.5rem;
}
</style>
