import GetStartButton from "@/components/GetStartButton";
import { subtitle, title } from "@/components/Title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet", size: "md" })}>
          Portfolio&nbsp;
        </h1>
        <br />
        <h1 className={title()}>For your Develop Experience</h1>
        <h2 className={subtitle({ class: "mt-4" })}></h2>
        <div className="mt-4">
          <GetStartButton />
        </div>
      </div>
    </main>
  );
}
