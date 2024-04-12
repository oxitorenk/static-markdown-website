import fs from "fs";
import matter from "gray-matter";
import { IContent } from "@/interfaces/IContent";

const GetContents = (parentName: string): IContent[] => {
  const folder = "contents/" + parentName + "/subcontents/";
  const files = fs.readdirSync(folder);
  const markdownPost = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file
  return markdownPost.map((fileName) => {
    const fileContents = fs.readFileSync(folder + fileName, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      order: matterResult.data.order,
      slug: parentName + "/" + fileName.replace(".md", ""),
    };
  });
};

export default GetContents;
