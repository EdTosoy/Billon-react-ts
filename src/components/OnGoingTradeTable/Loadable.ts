import { lazyLoad } from "utils/loadable";

export const OnGoingTradeTable = lazyLoad(
  () => import("./index"),
  (module) => module.OnGoingTradeTable
);
