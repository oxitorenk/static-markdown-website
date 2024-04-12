import fs from "fs";
import matter from "gray-matter";
import { IContentParent } from "@/interfaces/IContentParent";
import GetContents from "./GetContents";

const GetContentParent = (parentID: string): IContentParent => {
    const filePath = "contents/" + parentID + "/info.md";
    const fileContent = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContent);

    return {
      slug: parentID,
      title: matterResult.data.title,
      order: matterResult.data.order,
      content: GetContents(parentID)
    };
  }

  export default GetContentParent;