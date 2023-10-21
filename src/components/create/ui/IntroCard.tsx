"use client";

import { Card, CardBody } from "@nextui-org/react";

const IntroCard = () => {
  return (
    <div className="flex w-full items-center justify-center py-4">
      <Card
        className="w-full border-none dark:bg-default-100/50 max-w-[610px]"
        shadow="none"
      >
        <CardBody>
          <div className="gap-6 md:gap-4 items-center justify-center">
            단계를 따라 주세요
          </div>
        </CardBody>
      </Card>{" "}
    </div>
  );
};
export default IntroCard;
