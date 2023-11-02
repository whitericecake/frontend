"use client";
import { useState } from "react";
import { TestInterface } from "./ChatComponents";
import ChatBox from "./ui/ChatBox";
import ChatInput from "./ui/ChatInput";
import IntroCard from "./ui/IntroCard";
import DrawButton from "./ui/DrawButton";

const Chatbot = ({ name }: { name: TestInterface[] }) => {
  const [toggle, setToggle] = useState(false);
  const toggleButtonHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <section
      className={`flex justify-between flex-1 flex-col relative h-[calc(100vh-4rem)] bg-primary-50 ${
        toggle ? "translate-x-[100%] w-0" : "translate-x-0"
      } transition-transform shadow-sm rounded-sm`}
    >
      <IntroCard />
      <ChatBox name={name} />
      <ChatInput />
      <div className="absolute top-1/2 right-[100%] translate-y-1/2">
        <DrawButton onClick={toggleButtonHandler} toggle={toggle} />
      </div>
    </section>
  );
};
export default Chatbot;
