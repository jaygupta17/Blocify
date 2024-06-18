import { auth } from "@clerk/nextjs/server";
import Background from "@/components/Background";
import HoverBorderGradientDemo from "@/components/Buttonss";
import Link from "next/link";
import { useWeb3 } from "@/context";

export default function RetroGridDemo() {
  const { userId } = auth();
  return (
    <div className="relative flex flex-col gap-6 h-[85vh] w-[220vh] items-center justify-center overflow-hidden rounded-lg  bg-black p-20 md:shadow-xl">
      <Background />
      {!userId && <Link href="/sign-up">
      <HoverBorderGradientDemo />
      </Link>}
    </div>
  );
}
