import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getMarkdownContent(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // フロントマターを解析
  const { data, content } = matter(fileContents);

  // MarkdownをHTMLに変換
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    frontMatter: data,
    contentHtml,
  };
}
