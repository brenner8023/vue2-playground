<!-- https://github.dev/vuejs-translations/docs-zh-cn/blob/632319377332940828a4e0b9b3263516095afe6a/src/index.md -->
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Home",
});
</script>

<template>
  <div>
    <section id="hero">
      <h1 class="tagline">
        <!-- <span class="accent">渐进式</span><br /> -->
        Vue Code View
      </h1>
      <p class="description">
        一个基于 Vue 2，在网页中实时编辑运行代码、预览效果的轻量级代码交互组件。
      </p>
      <p class="description">
        A Vue 2 component like Vue SFC REPL '@vue/repl' ，which can see the
        effect of changes instantly as you code.
      </p>
      <p class="actions">
        <a class="get-started" href="/guide/introduction.html"> 快速开始 </a>
        <a class="setup" href="/guide/quick-start.html">在线示例</a>
      </p>
    </section>

    <section id="highlights" class="vt-box-container">
      <div class="vt-box">
        <h2>Not Setup</h2>
        <p>
          Start coding with your favorite language on any platform, OS, and
          device.
        </p>
      </div>
      <div class="vt-box">
        <h2>Updates live</h2>
        <p>You can see the effect of changes instantly, inline, as you code.</p>
      </div>
      <div class="vt-box">
        <h2>Rich interaction</h2>
        <p>Make your project more productive with interactive docs.</p>
      </div>

      <div class="vt-box">
        <h2>轻量快速</h2>
        <p>无需配置环境，打开浏览器即可开始编程。</p>
      </div>
      <div class="vt-box">
        <h2>更新实时</h2>
        <p>调试代码时，可以立即看到更改的效果。</p>
      </div>
      <div class="vt-box">
        <h2>交互丰富</h2>
        <p>支持代码高亮、 Markdown 示例渲染，让您的项目文档更加高效。</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
section {
  padding: 42px 32px;
}

#hero {
  padding: 96px 32px;
  text-align: center;
}

.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #3b8eed 25%, #04befe);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  font-weight: 600;
  background-color: var(--vt-c-blue);
  color: #fff;
  margin-right: 18px;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.dark .actions .get-started {
  color: var(--vt-c-indigo);
  background-color: var(--vt-c-blue);
  /* color: #fff; */
}

.actions .get-started:hover {
  background-color: var(--vt-c-blue-dark);
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.dark .actions .get-started:hover {
  background-color: var(--vt-c-blue-light);
}

.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

#special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  text-align: center;
}

#special-sponsor span {
  color: var(--vt-c-text-2);
  font-weight: 500;
  font-size: 13px;
  vertical-align: middle;
  margin: 0 24px;
}

#special-sponsor img {
  display: inline-block;
  vertical-align: middle;
  height: 36px;
}

.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

#sponsors {
  max-width: 900px;
  margin: 0px auto;
}

#sponsors h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
}

#sponsors .sponsor-container {
  margin-bottom: 3em;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 64px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  #special-sponsor img {
    display: block;
    margin: 2px auto 1px;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>
