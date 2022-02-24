import { lazyLoad } from "utils/loadable";

export const Summary = lazyLoad(
  () => import("./index"),
  (module) => module.ProfitCalculator
);
