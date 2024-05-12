import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoRocketSharp } from "react-icons/io5";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  const {userId} = auth()
  return (
    <div className="h-[85vh] w-screen flex flex-col justify-center items-center gap-y-4">
      <h1 className="text-3xl w-1/2 text-center">Discover an art gallery enhanced by AI, where creativity meets innovation</h1>
      {!userId && <Link href="/sign-up">
        <Button variant={"secondary"}>Get started &nbsp; <IoRocketSharp /></Button>
      </Link>}
    </div>
  );
}