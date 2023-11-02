"use client";
import { Card, CardBody } from "@nextui-org/react";
import { useState } from "react";

const QUESTION_ARRAY = [
  "당신의 이름은 무엇인가요 ???",
  "개발자로서의 장점이 무엇인가요!",
  "당신의 학력을 적어주세요!",
  "대외활동을 한 경험이 있을까요?",
];
const IntroCard = () => {
  const [question, setQuestion] = useState(QUESTION_ARRAY[0]);
  return (
    <div className="flex w-full items-center justify-center py-4">
      <Card
        className="w-full border-none dark:bg-default-100/50 max-w-[610px]"
        shadow="none"
      >
        <CardBody>
          <div className="gap-6 md:gap-4 items-center justify-center">
            {question}
          </div>
        </CardBody>
      </Card>{" "}
    </div>
  );
};
export default IntroCard;
