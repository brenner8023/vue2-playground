import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

// 创建一个 pinia（根存储）
const store = createPinia();
store.use(createPersistedState()); //开启缓存，存储在localstorage

export { store };
