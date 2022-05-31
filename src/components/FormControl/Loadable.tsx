import { lazyLoad } from "utils/loadable";

export const FormControl = lazyLoad(
  () => import("./index"),
  (module) => module.FormControl
);
