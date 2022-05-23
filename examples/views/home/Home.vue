<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import _HomeHero from "./HomeHero.vue";
import _HomeFeatures from "./HomeFeatures.vue";
import _HomeFooter from "./HomeFooter.vue";
import HomeExamples from "./HomeExamples.vue";
export default defineComponent({
  name: "Home",
  components: {
    HomeHero: _HomeHero as any,
    HomeFeatures: _HomeFeatures as any,
    HomeFooter: _HomeFooter as any,
    HomeExamples,
  },
});
</script>

<template>
  <main class="home" aria-labelledby="main-title">
    <HomeHero />
    <HomeFeatures />
    <div class="home-content">
      <HomeExamples />
    </div>
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
