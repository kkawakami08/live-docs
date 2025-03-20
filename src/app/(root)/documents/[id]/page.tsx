import { Editor } from "@/components/editor/Editor";
import Header from "@/components/header";
import React from "react";

const DocumentPage = () => {
  return (
    <div className="">
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="text-white font-bold">This is a fake document title</p>
        </div>
      </Header>
      <Editor />
    </div>
  );
};

export default DocumentPage;
