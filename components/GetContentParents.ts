import fs from "fs";
import matter from "gray-matter";
import { IContentParent } from "@/interfaces/IContentParent";
import GetContents from "./GetContents";

const GetContentParents = (): IContentParent[] => {
  const folder = "contents/";
  const files = fs.readdirSync(folder);

  // Get gray-matter data from each file
  return files.map((folderName) => {
    const fileContents = fs.readFileSync(
      folder + folderName + "/info.md",
      "utf8"
    );
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
