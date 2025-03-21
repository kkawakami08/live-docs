import { Editor } from "@/components/editor/Editor";
import Header from "@/components/header";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const DocumentPage = () => {
  return (
    <div className="">
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="text-white font-bold">Share</p>
        </div>
        <SignedOut>
          <SignInButton className="text-white" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor />
    </div>
  );
};

export default DocumentPage;
