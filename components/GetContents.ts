import fs from "fs";
import matter from "gray-matter";

export interface IContent {
  title: string;
  slug: string;
  order: number;
}

const GetContents = (parentName: string): IContent[] => {
  const folder = `contents/${parentName}/subcontents/`;
  const files = fs.readdirSync(folder);
  const markdownFileNames = files.filter((file) => file.endsWith(".md"));

  // Get metadata from each file
  return markdownFileNames.map((fileName) => {
    const fileContent = fs.readFileSync(folder + fileName, "utf8");
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      order: matterResult.data.order,
      slug: `${parentName}/${fileName.replace(".md", "")}`
    };
  });
};

export default GetContents;
