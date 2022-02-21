import { lazyLoad } from "utils/loadable";

export const SideMenu = lazyLoad(
  () => import("./index"),
  (module) => module.SideMenu
);
