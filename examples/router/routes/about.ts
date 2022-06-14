import type { RouteConfig } from "vue-router";

const guide: RouteConfig = {
  path: `/guide`,
  name: "Guide",
  redirect: `/guide/introduction`,
  meta: {
    orderNo: 11,
    icon: "ion:key-outline",
    title: "文档",
    hasSidebar: true, // 是否有侧边栏
  },
  children: [
    {
      path: "introduction",
      name: "Introduction",
      component: () => import("../../views/home/Home.vue"),
    },
  ],
};

const tutorial: RouteConfig = {
  path: `/tutorial`,
  name: "Tutorial",
  component: () => import("../../views/home/Home.vue"),
  meta: {
    orderNo: 12,
    icon: "ion:key-outline",
    title: "教程",
    hasSidebar: false, // 属性不设置时，默认为 false
  },
};

const examples: RouteConfig = {
  path: `/examples`,
  name: "Examples",
  component: () => import("../../views/home/Home.vue"),
  meta: {
    orderNo: 13,
    icon: "ion:key-outline",
    title: "范例",
    hasSidebar: true,
  },
};

const githubNavGroup = {
  meta: {
    orderNo: 10,
    icon: "ion:key-outline",
    title: "Github",
    isNavGroup: true, // 是否是导航组
  },
  routes: [guide, tutorial, examples],
};

const refNavGroup = {
  meta: {
    orderNo: 10,
    icon: "ion:key-outline",
    title: "参考",
    isNavGroup: true, // 是否是导航组
  },
  routes: [guide, tutorial, examples],
};

const aboutNavGroup = {
  activeMatch: `^/(guide|examples)/`,
  meta: {
    orderNo: 10,
    icon: "ion:key-outline",
    title: "文档",
    isNavGroup: true, // 是否是导航组
  },
  routes: [githubNavGroup, refNavGroup],
};

export default aboutNavGroup;
