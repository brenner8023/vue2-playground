<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  ref,
} from "@vue/composition-api";
import VCVSwitch from "./VCVSwitch.vue";
import VCVIconSun from "./icons/VCVIconSun.vue";
import VCVIconMoon from "./icons/VCVIconMoon.vue";

export default defineComponent({
  components: { VCVSwitch, VCVIconSun, VCVIconMoon },
  setup() {
    const storageKey = "vue-theme-appearance";
    const toggle =
      typeof localStorage !== "undefined" ? useAppearance() : () => {};

    function useAppearance() {
      let userPreference = localStorage.getItem(storageKey) || "auto";
      const query = window.matchMedia(`(prefers-color-scheme: dark)`);
      const classList = document.documentElement.classList;
      let isDark =
        userPreference === "auto" ? query.matches : userPreference === "dark";
      const setClass = (dark: boolean) =>
        classList[dark ? "add" : "remove"]("dark");
      query.onchange = (e) => {
        if (userPreference === "auto") {
          setClass((isDark = e.matches));
        }
      };
      const toggle = () => {
        setClass((isDark = !isDark));
        localStorage.setItem(
          storageKey,
          (userPreference = isDark
            ? query.matches
              ? "auto"
              : "dark"
            : query.matches
            ? "light"
            : "auto")
        );
      };
      return toggle;
    }

    return {
      toggle,
    };
  },
});
</script>

<template>
  <VCVSwitch
    class="vt-switch-appearance"
    aria-label="toggle dark mode"
    @click="toggle"
  >
    <VCVIconSun class="vt-switch-appearance-sun" />
    <VCVIconMoon class="vt-switch-appearance-moon" />
  </VCVSwitch>
</template>
