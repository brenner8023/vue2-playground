import { NavItem, PageData } from "@examples/types/config";

import {
  computed,
  defineComponent,
  h,
  inject,
  InjectionKey,
  provide,
  Ref,
} from "@vue/composition-api";

export function useConfig() {
  return {
    config: {
      appearance: true,

      nav: [
        {
          text: "test1",
          link: "test1",
          activeMatch: "test1",
          // items: (NavItemWithLink | MenuItemChildWithChildren)[];
        },
        {
          text: "test2",
          // link: "test2",
          // activeMatch: "test2",
          items: [
            {
              text: "test2-s1",
              items: [
                {
                  text: "test2-s1-c1",
                  link: "test2-s1-c1",
                  activeMatch: "test2-s1-c1",
                },
                {
                  text: "test2-s1-c2",
                  link: "test2-s1-c2",
                  activeMatch: "test2-s1-c2",
                },
              ],
            },
            {
              text: "test2-s2",
              activeMatch: "test2-s2",
              items: [
                {
                  text: "test2-s2-c1",
                  link: "test2-s2-c1",
                  activeMatch: "test2-s2-c1",
                },
                {
                  text: "test2-s2-c2",
                  link: "test2-s2-c2",
                  activeMatch: "test2-s2-c2",
                },
              ],
            },
            {
              text: "test2-s3",
              link: "test2-s3",
              activeMatch: "test2-s3",
            },
          ],
        },
        {
          text: "test3",
          // link: "test3",
          // activeMatch: "test3",
          items: [
            {
              text: "test3-s1",
              link: "https://staging-cn.vuejs.org/guide/quick-start.html",
              activeMatch: "test3-s1",
            },
            {
              text: "test3-s2",
              link: "test3-s2",
              activeMatch: "test3-s2",
            },
          ],
          // items: (NavItemWithLink | MenuItemChildWithChildren)[];
        },
      ] as NavItem[],
      // sidebar: config.sidebar && normalizeSideBar(config.sidebar)
    },
  };
}

export function useData() {
  return {
    page: {} as PageData,
  };
}
