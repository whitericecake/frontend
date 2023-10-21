import ChatInput from "./ui/ChatInput";
import IntroCard from "./ui/IntroCard";
import ChatBox from "./ui/ChatBox";

export interface TestInterface {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const ChatComponents = async () => {
  const name = await fetch("http://1.227.114.115:3002/post", {
    headers: {
      "Content-Type": "application/json",
    },
    next: { tags: ["chat", "del"] },
  }).then<TestInterface[]>((res) => res.json());

  return (
    <section className="flex justify-between grow flex-col relative h-[calc(100vh-4rem)] bg-gray-50">
      <IntroCard />
      <ChatBox name={name} />
      <ChatInput />
    </section>
  );
};
export default ChatComponents;
