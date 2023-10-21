"use client";
import { Card, CardBody } from "@nextui-org/react";
import { TestInterface } from "../ChatComponents";
import DelButton from "./DelButton";

const ChatBox = ({ name }: { name: TestInterface[] }) => {
  const data = name;
  return (
    <article className="relative overflow-scroll">
      {name.map((e) => (
        <div key={e.id} className="flex justify-between p-10 max-w-lg">
          <Card
            className="w-full border-none dark:bg-default-100/50 max-w-[610px]"
            shadow="none"
          >
            <CardBody>
              <div className="gap-6 md:gap-4 items-center justify-center">
                {e.content}
              </div>
            </CardBody>
          </Card>
          <DelButton id={e.id} />
        </div>
      ))}
    </article>
  );
};
export default ChatBox;
