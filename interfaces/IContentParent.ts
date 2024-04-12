import { IContent } from "./IContent";

export interface IContentParent {
  slug: string;
  title: string;
  order: number;
  content: IContent[];
}
