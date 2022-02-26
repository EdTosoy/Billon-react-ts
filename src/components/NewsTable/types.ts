export interface INewsTableFormValues {
  news: INews[] | null;
}
export interface INews {
  currency: string;
  type:
    | "inherit"
    | "action"
    | "disabled"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
}
