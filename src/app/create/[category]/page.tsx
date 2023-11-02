import ChatComponents from "@/components/create/ChatComponents";
import PreViewComponents from "@/components/create/PreViewComponents";

const Page = () => {
  return (
    <div className="flex w-full">
      <PreViewComponents />
      <ChatComponents />
    </div>
  );
};
export default Page;
