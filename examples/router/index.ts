import type { RouteConfig } from "vue-router";
import Demo from "../views/REPL.vue";

const route: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/Home.vue"),
    meta: {
      hasFooter: true,
    },
  },
  {
    path: "/repl",
    name: "repl",
    meta: {
      hasFooter: false, // 隐藏 footer
      hasSidebar: false, // 没有 Siderbar
    },
    component: Demo,
  },
  {
    path: "/changelog",
    name: "changelog",
    component: (r) =>
      require.ensure([], () => r(require("../../CHANGELOG.zh-CN.md"))),
  },
  {
    path: `/guide`,
    component: (r) =>
      require.ensure([], () => r(require("../docs/zh-CN/overview.md"))),
    meta: {
      hasSidebar: true, // 没有 Siderbar
    },
    children: [
      {
        name: "introduction",
        path: "introduction",
        meta: {
          hasSidebar: true, // 没有 Siderbar
        },
        component: (r) =>
          require.ensure([], () => r(require("../../CHANGELOG.zh-CN.md"))),
      },
      // {
      //   name: "project-intro",
      //   path: "/project-intro",
      //   meta: {
      //     hasSidebar: true, // 没有 Siderbar
      //   },
      //   component: (r) =>
      //     require.ensure([], () =>
      //       r(require("../docs/blogs/project-intro.md"))
      //     ),
      // },
      // {
      //   name: "code-logic-intro",
      //   path: "/code-logic-intro",
      //   meta: {
      //     hasSidebar: true, // 没有 Siderbar
      //   },
      //   component: (r) =>
      //     require.ensure([], () =>
      //       r(require("../docs/blogs/code-logic-intro.md"))
      //     ),
      // },
    ],
  },
];

// const sideRoutes: Array<RouteConfig> = registerRoute(sideNavConfig);
// route = route.concat(sideRoutes);

export const RootRoute: RouteConfig = {
  path: "/",
  name: "Root",
  redirect: "/home",
  meta: {
    title: "Root",
  },
};

// Basic routing
export const basicRoutes = [
  RootRoute,
  // ...mainOutRoutes,
  // REDIRECT_ROUTE,
  // PAGE_NOT_FOUND_ROUTE,
];

export default route;
