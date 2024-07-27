import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Codepen,
  Film,
  Home,
  LineChart,
  Package,
  Package2,
  PlusSquare,
  Search,
  SearchIcon,
  Settings,
  User,
  Users2,
  Video,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { ConnectBtn } from "../connectBtn";
function MainHead() {
  return (
    <aside className="fixed left-0 hidden h-screen w-[10vh] flex-col border-r bg-background sm:flex">
      <TooltipProvider>
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <div className="my-3">
            <Codepen strokeWidth={1.5} />
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/home"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:bg-accent hover:text-foreground md:h-8 md:w-8"
              >
                <Home className="h-[4vh] w-[3vw]" />
                <span className="sr-only">Home</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Home</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/reel"
                className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-accent text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Video strokeWidth={1.5} className="h-[4vh] w-[3vw]"/>
                <span className="sr-only">Reel</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Reel</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/explore"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:h-8 md:w-8"
              >
                <SearchIcon className="h-[4vh] w-[3vw]"/>
                <span className="sr-only">Explore</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Explore</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/create"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:h-8 md:w-8"
              >
                <PlusSquare className="h-[4vh] w-[4vw]" />
                <span className="sr-only">Create</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Create</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <ConnectBtn/>
            </TooltipTrigger>
            <TooltipContent side="right">Create</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg  text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:h-8 md:w-8"
              >
                <User />
                <span className="sr-only">Profile</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Profile</TooltipContent>
          </Tooltip>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:h-8 md:w-8"
          >
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Settings className="h-5 w-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Link>
        </nav>
      </TooltipProvider>
    </aside>
  );
}

export default MainHead;
