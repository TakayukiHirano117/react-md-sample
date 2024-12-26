import dynamic from "next/dynamic";
import React from "react";
const ReactSimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  options: {
    autofocus: boolean;
    spellChecker: boolean;
    autosave: {
      enabled: boolean;
      uniqueId: string;
      delay: number;
    };
    toolbar: boolean;
    placeholder?: string;
  };
  className?: string;
}

const MarkdownEditor = ({ value, onChange, options }: MarkdownEditorProps) => {
  return (
    <ReactSimpleMdeEditor value={value} onChange={onChange} options={options} />
  );
};

export default MarkdownEditor;
