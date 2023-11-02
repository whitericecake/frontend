import { DiscordIcon, GithubIcon, TwitterIcon } from "@/components/Icons";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="relative flex w-full">
      {children}
      <aside className="py-4 flex flex-col gap-4 relative right-0 w-16 h-[calc(100vh-4rem)] bg-secondary-50 shadow-lg">
        <div className="flex flex-col items-center justify-center">
          <GithubIcon className="w-full" size={36} />
          <p>1단계</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <TwitterIcon className="w-full" size={36} />
          <p>2단계</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <DiscordIcon className="w-full" size={36} />
          <p>3단계</p>
        </div>
      </aside>
    </section>
  );
};
export default Layout;
