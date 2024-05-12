"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin"

export default function page() {
  return (
    <>
    <div className="flex justify-center items-center text-5xl">
      The Craftsmen
    </div>
    <div className="h-[35rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/github.com"
        href="https://github.com/jaygupta17"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Jay Gupta
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Tech Stack: Nextjs, Firebase, Tailwind, Typescript ,ML
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      <PinContainer
        title="/github.com"
        href="https://github.com/OmChillure"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Om Chillure
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Tech Stack: Next.js, Typescipt, Python, GenAI, ML
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
    </>
  );
}
