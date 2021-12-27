export interface InnerSubs {
  ID: number;
  PATH: string;
  LABEL: string;
  ORDER: number;
}
export  interface NavRoute {
  ID: number;
  PATH: string;
  LABEL: string;
  SUBS: Array<InnerSubs>;
}