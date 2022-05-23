import { NavItem, PageData } from "@examples/types/config";
import { SocialLink } from "@examples/types/socialLink";

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
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/andurils/vue-code-view",
        },
        {
          icon: "languages",
          link: "https://staging-cn.vuejs.org/guide/typescript/options-api.html#typing-component-props",
        },
      ] as SocialLink[],
      nav: [
        {
          text: "REPL",
          link: "/#/repl",
          activeMatch: "repl",
        },
        {
          text: "文档",
          items: [
            {
              text: "指南",
              link: "/#/doc",
            },
            {
              text: "更新日志",
              link: "/#/changelog",
            },
          ],
        },
        {
          text: "关于",
          items: [
            {
              text: "github",
              items: [
                {
                  text: "issues",
                  link: "https://github.com/andurils/vue-code-view/issues",
                },
                {
                  text: "changelog",
                  link: "https://github.com/andurils/vue-code-view/blob/main/CHANGELOG.zh-CN.md",
                },
              ],
            },
            {
              text: "参考",
              items: [
                {
                  text: "Ant Design",
                  link: "https://ant.design/index-cn",
                },
                {
                  text: "Ant Design Vue",
                  link: "https://www.antdv.com/components/overview",
                },
                {
                  text: "Element UI",
                  link: "https://element.eleme.cn/#/zh-CN",
                },
              ],
            },
          ],
        },
      ] as NavItem[],
      // sidebar: config.sidebar && normalizeSideBar(config.sidebar)
    },
  };
}

// https://vuepress.vuejs.org/theme/default-theme-config.html#homepage
export function useData() {
  return {
    page: {} as PageData,
    theme: {
      footer: {
        license: {
          text: "MIT License",
          link: "https://opensource.org/licenses/MIT",
        },
        copyright: "Copyright © 20201-present Andurils",
      },
    },
    frontmatter: {
      features: [
        {
          title: "轻量快速",
          details: "无需配置环境，打开浏览器即可开始编程。",
        },
        { title: "更新实时", details: "调试代码时，可以立即看到更改的效果。" },
        {
          title: "交互丰富",
          details: "支持代码高亮、 Markdown 示例渲染，让您的项目文档更加高效。",
        },
        {
          title: "Not Setup",
          details:
            "Start coding with your favorite language on any platform, and OS.",
        },
        {
          title: "Updates live",
          details:
            "You can see the effect of changes instantly, inline, as you code.",
        },
        {
          title: "Rich interaction",
          details: "Make your project more productive with interactive docs.",
        },
      ],
      footer: "关注获取更多信息！",
    },
  };
}
