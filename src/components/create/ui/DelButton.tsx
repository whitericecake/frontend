"use client";
import { actionDelClick } from "@/action/server";
import { Button } from "@nextui-org/react";

const DelButton = ({ id }: { id: number }) => {
  const actionDelClickWithId = actionDelClick.bind(null, id);
  return (
    <form action={actionDelClickWithId}>
      <Button type="submit">Del</Button>
    </form>
  );
};
export default DelButton;
