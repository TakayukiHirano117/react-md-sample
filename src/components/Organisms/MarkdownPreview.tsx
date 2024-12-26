import React from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";

const MarkdownPreview = ({ markdownValue, className }: { markdownValue: string, className: string }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} className={className}>
      {markdownValue}
    </ReactMarkdown>
  );
};

export default MarkdownPreview;
