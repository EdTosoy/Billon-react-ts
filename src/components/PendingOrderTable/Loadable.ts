import { lazyLoad } from "utils/loadable";

export const PendingOrderTable = lazyLoad(
  () => import("./index"),
  (module) => module.PendingOrderTable
);
