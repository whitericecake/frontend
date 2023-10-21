import ChatComponents from "@/components/create/ChatComponents";
import PreViewComponents from "@/components/create/PreViewComponents";
import SideMenu from "@/components/create/ui/menu/SideMenu";

const CreatePage = () => {
  return (
    <section className="flex w-full">
      <SideMenu />
      <PreViewComponents />
      <ChatComponents />
    </section>
  );
};
export default CreatePage;
