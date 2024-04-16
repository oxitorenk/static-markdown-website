import fs from "fs";
import matter from "gray-matter";
import { IContent } from "./GetContents";
import GetContents from "./GetContents";

export interface IContentParent {
  slug: string;
  title: string;
  order: number;
  content: IContent[];
}

const GetContentParent = (parentSlug: string): IContentParent => {
    const filePath = `contents/${parentSlug}/info.md`;
    const fileContent = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContent);

    return {
      slug: parentSlug,
      title: matterResult.data.title,
      order: matterResult.data.order,
      content: GetContents(parentSlug),
    };
  }

  export default GetContentParent;