"use client";

import "easymde/dist/easymde.min.css";
import { useMemo, useState } from "react";
import "github-markdown-css/github-markdown.css";
import MarkdownEditor from "./Organisms/MarkdownEditor";
import MarkdownPreview from "./Organisms/MarkdownPreview";

export const MarkdownArea = () => {
  // MarkdownEditorに渡す
  const [markdownValue, setMarkdownValue] = useState("");

  //   useEffect(() => {
  //     // 理想的には、ファイルから中身を呼び出してstateにセットしたい
  //     const savedContent = localStorage.getItem("smde_saved_content") ?? "";
  //     setMarkdownValue(savedContent);
  //   }, []);

  // MarkdownEditorに渡す
  const onChange = (value: string) => {
    setMarkdownValue(value);
  };

  // MarkdownEditorに渡す
  const options = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      autosave: {
        enabled: true,
        uniqueId: "saved_content",
        delay: 1000,
      },
      toolbar: false,
    };
  }, []);

  return (
    <>
      <MarkdownEditor
        value={markdownValue}
        onChange={onChange}
        options={options}
      />
      <h1 className="text-4xl font-bold mb-4 text-left pl-4">プレビュー</h1>
      <div
        className="markdown-body p-4 border border-gray-300 h-72 overflow-y-auto"
        style={{ fontFamily: "inherit", fontSize: "inherit" }}
      >
        <MarkdownPreview markdownValue={markdownValue} className="" />
      </div>
    </>
  );
};
