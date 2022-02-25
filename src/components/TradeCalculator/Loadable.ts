import { lazyLoad } from "utils/loadable";

export const TradeCalculator = lazyLoad(
  () => import("./index"),
  (module) => module.TradeCalculator
);
