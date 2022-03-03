import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import App from "@examples/App.vue";
import VueRouter from "vue-router";
import routes from "@examples/router";
import CodeViewer from "@/index";

// UI组件库引入
import Antd from "ant-design-vue";
import ElementUI from "element-ui";
// 语法高亮
import hljs from "highlight.js";

// 网站页面 模板页面组件
import MainFooter from "@examples/components/footer.vue";
import MainHeader from "@examples/components/header.vue";
import FooterNav from "@examples/components/footer-nav.vue";
import DemoBlock from "@examples/components/DemoBlock.vue";

// UI组件库样式引入
import "ant-design-vue/dist/antd.css";
import "element-ui/lib/theme-chalk/index.css";
// 响应式布局断点的隐藏
import "element-ui/lib/theme-chalk/display.css";

// 公共样式
import "@assets/styles/index.scss";
// highlight主题
import "highlight.js/styles/a11y-dark.css";

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);
Vue.use(VueRouter);
Vue.use(CodeViewer); // 国际化配置 Vue.use(CodeViewer, { locale });
Vue.use(ElementUI); // 引入组件 element 2.x
Vue.use(Antd); // 引入组件 antd vue 1.x

Vue.component("demo-block", DemoBlock);
Vue.component("main-footer", MainFooter);
Vue.component("main-header", MainHeader);
Vue.component("footer-nav", FooterNav);

const router = new VueRouter({
  mode: "hash", // 'hash' | 'history'
  base: process.env.BASE_URL,
  // base: __dirname,
  routes,
});

router.afterEach((route) => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll("pre code");
    blocks.forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
  });
});

// TODO:store  vuex=>Pinia
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
