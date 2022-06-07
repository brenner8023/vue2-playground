import CodeViewer from "./vcv/VCV.vue";

const install = function (Vue: any, opts = {}) {
  Vue.component(CodeViewer.name, CodeViewer);
};

// CDN 引入
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
