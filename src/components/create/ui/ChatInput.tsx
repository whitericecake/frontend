"use client";
import { actionTest } from "@/action/server";
import { Button, Input, Textarea } from "@nextui-org/react";

import AddButton from "./AddButton";
import DrawButton from "./DrawButton";

const ChatInput = () => {
  return (
    <form
      className="flex mb-2 w-full items-center justify-center gap-4"
      action={actionTest}
    >
      <Textarea
        type="text"
        name="name"
        className="max-w-lg p-3"
        placeholder="답변을 입력해주세요"
      />

      <AddButton />
    </form>
  );
};
export default ChatInput;
