"use client";
import { actionTest } from "@/action/server";
import { ButtonLoading } from "@/components/Icons";
import { Button, Input, Textarea } from "@nextui-org/react";

const ChatInput = () => {
  return (
    <form
      className="flex mb-2 w-full items-center justify-center gap-4"
      action={actionTest}
    >
      <Textarea
        type="text"
        // variant={"faded"}
        name="name"
        className="max-w-lg p-3"
        placeholder="답변을 입력해주세요"
      />

      <Button
        type="submit"
        className=""
        color="secondary"
        isLoading
        spinner={ButtonLoading}
      >
        확인
      </Button>
    </form>
  );
};
export default ChatInput;
