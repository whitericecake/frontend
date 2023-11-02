import SideMenu from "@/components/create/ui/menu/SideMenu";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex">
      <SideMenu />
      {children}
    </section>
  );
};
export default Layout;
