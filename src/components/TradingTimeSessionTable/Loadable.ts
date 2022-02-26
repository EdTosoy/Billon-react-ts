import { lazyLoad } from "utils/loadable";

export const TradingTimeSessionTable = lazyLoad(
  () => import("./index"),
  (module) => module.TradingTimeSessionTable
);
