"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const GetStartButton = () => {
  const router = useRouter();
  return (
    <Button
      disableRipple
      onClick={() => router.push("/create")}
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
    >
      시작하기
    </Button>
  );
};
export default GetStartButton;
