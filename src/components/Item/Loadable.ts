import { lazyLoad } from "utils/loadable";

export const Item = lazyLoad(
  () => import("./index"),
  (module) => module.Item
);
