import { lazyLoad } from "utils/loadable";

export const TradingTools = lazyLoad(
  () => import("./index"),
  (module) => module.TradingTools
);
