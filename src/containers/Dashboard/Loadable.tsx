import { lazyLoad } from "utils/loadable";

export const Dashboard = lazyLoad(
  () => import("./index"),
  (module) => module.Dashboard
);
