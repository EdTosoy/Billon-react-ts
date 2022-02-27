import { lazyLoad } from "utils/loadable";

export const OrderCalculator = lazyLoad(
  () => import("./index"),
  (module) => module.OrderCalculator
);
