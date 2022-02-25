import { lazyLoad } from "utils/loadable";

export const NewsTable = lazyLoad(
  () => import("./index"),
  (module) => module.NewsTable
);
