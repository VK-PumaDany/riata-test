import { PropsWithChildren } from "react";
import { Navbar, Footer, SideBar } from "../src/layout";

export default function LayaoutControlPanel({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-800 flex flex-col scroll-y">
      <Navbar />
      <div className="flex-1 flex flex-row">
        <SideBar />
        <main className="flex flex-col pl-4 pt-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
