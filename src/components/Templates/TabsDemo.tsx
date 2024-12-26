"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarkdownEditor from "../Organisms/MarkdownEditor";
import { useEffect, useMemo, useState } from "react";
import MarkdownPreview from "../Organisms/MarkdownPreview";
import "easymde/dist/easymde.min.css";
import "github-markdown-css/github-markdown.css";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function TabsDemo() {
  const [markdownValue, setMarkdownValue] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem('smde_saved_content') ?? '';
    setMarkdownValue(savedContent);
  }, []);

  const onChange = (value: string) => {
    setMarkdownValue(value);
  };

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
      placeholder: "Markdownで募集を書いてください",
    };
  }, []);

  return (
    <div>
      <Input
        placeholder="タイトル"
        className="p-2 md:text-3xl outline-none border-none focus:ring-0 focus:outline-none hover:border-none focus:border-none focus-visible:ring-0 shadow-none"
      />
      <Tabs defaultValue="write" className="w-[960px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="write">募集を書く</TabsTrigger>
          <TabsTrigger value="preview">プレビュー</TabsTrigger>
        </TabsList>
        <TabsContent value="write">
          <MarkdownEditor
            value={markdownValue}
            onChange={onChange}
            options={options}
          />
        </TabsContent>
        <TabsContent value="preview" className="markdown-body p-4 border-1 rounded prose">
          <MarkdownPreview markdownValue={markdownValue} className="markdown-body" />
        </TabsContent>
      </Tabs>
      <Button className="mt-4">募集を投稿する</Button>
    </div>
  );
}
