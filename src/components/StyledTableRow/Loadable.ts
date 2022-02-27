import { lazyLoad } from "utils/loadable";

export const StyledTableRow = lazyLoad(
  () => import("./index"),
  (module) => module.StyledTableRow
);
