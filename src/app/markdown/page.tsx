// import { getMarkdownContent } from "@/lib/markdown";
import fs from "fs";
import path from "path";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown-light.css";

export default async function MarkdownPage() {
  const filePath = path.join(process.cwd(), "src/public/sample.md");
  // console.log(filePath)
  const markdownContent = fs.readFileSync(filePath, "utf8");

  return (
    <div className="markdown-body">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdownContent}</ReactMarkdown>
    </div>
  )
}
