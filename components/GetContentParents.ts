import fs from "fs";
import matter from "gray-matter";
import GetContents from "./GetContents";
import { IContentParent } from "./GetContentParent";

const GetContentParents = (): IContentParent[] => {
  const folder = "contents/";
  const files = fs.readdirSync(folder);

  // Get metadata from each file
  return files.map((folderName) => {
    const filePath = `${folder + folderName}/info.md`;
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug: folderName,
      title: matterResult.data.title,
      order: matterResult.data.order,
      content: GetContents(folderName),
    };
  });
};

export default GetContentParents;
