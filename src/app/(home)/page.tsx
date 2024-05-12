import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoRocketSharp } from "react-icons/io5";
import { auth } from "@clerk/nextjs/server";
import RetroGrid from "@/components/ui/retro-grid";

export default function RetroGridDemo() {
    const {userId} = auth();
  return (
    <div className="relative flex flex-col gap-6 h-[85vh] w-[100%] items-center justify-center overflow-hidden rounded-lg  bg-background p-20 md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-3xl px-4 py-2 rounded-md tracking-wide font-bold leading-none tracking-tighter text-white">
        Blockify
      </span>
      <h1 className="text-3xl w-1/2 text-center">An Automated & Blockchain based Social Media Web App</h1>
      {!userId && <Link href="/sign-up">
        <Button variant={"secondary"}>Get started &nbsp; <IoRocketSharp /></Button>
      </Link>}
      <RetroGrid />
    </div>
  );
};

