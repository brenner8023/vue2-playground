<template>
  <div>
    {{ props.test }}
    <HW></HW>

    <!-- 挂载DOM元素 -->
    <p ref="msg">留意该节点，有一个ref属性</p>
    <!-- 挂载DOM元素 -->
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  ref,
} from "@vue/composition-api";
import HW from "./Test.vue";

export default defineComponent({
  components: {
    HW,
  },
  props: {
    test: {
      type: String,
      //   required: true,
      default: "xxxxxxxxxxx",
    },
  },
  setup(props) {
    console.log(1);
    // 定义挂载节点，声明的类型详见下方附表
    const msg = ref<HTMLElement | null>(null);

    onBeforeMount(() => {
      console.log(2);
    });

    onMounted(() => {
      console.log(3);
      // 比如获取DOM的文本
      console.log(msg.value!.innerText);
    });

    console.log(4);
    return {
      props,
      msg,
    };
  },
});
</script>

<style></style>
