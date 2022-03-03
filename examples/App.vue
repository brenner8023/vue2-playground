<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header :is-home="isHome"></main-header>
    <div>
      <router-view :class="{ 'markdown-body': isChangelog }"></router-view>
    </div>
    <!-- 首页显示 -->
    <main-footer v-if="isHome || isChangelog"></main-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  mounted() {
    console.log("vcv site mounted");
  },
  computed: {
    isComponent() {
      // return /^component-/.test(this.$route.name || "");
      return this.$route.path.indexOf("component") > -1;
    },
    isRepl() {
      return this.$route.path.indexOf("repl") > -1;
    },
    isChangelog() {
      return /^changelog/.test(this.$route.name || "");
    },
    isHome() {
      // return /^home/.test(this.$route.name || "");
      return this.$route.path.length <= 1;
    },
  },
});
</script>

<style>
.markdown-body {
  box-sizing: border-box;
  max-width: 980px;
  margin: 0 auto;
  padding: 40px;
}
</style>
