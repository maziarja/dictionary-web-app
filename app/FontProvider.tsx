"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

import { useEffect, useState } from "react";

function FontProvider() {
  const [font, setFont] = useState<"Sans Serif" | "Serif" | "Mono">();

  function handleClickInconsolata() {
    window.localStorage.setItem("font", "mono");
    document.documentElement.dataset.font = "mono";
    setFont("Mono");
  }
  function handleClickInter() {
    window.localStorage.setItem("font", "sans");
    document.documentElement.dataset.font = "sans";
    setFont("Sans Serif");
  }
  function handleClickLora() {
    window.localStorage.setItem("font", "serif");
    document.documentElement.dataset.font = "serif";
    setFont("Serif");
  }

  useEffect(() => {
    const savedFont = window.localStorage.getItem("font");
    if (savedFont) document.documentElement.dataset.font = savedFont;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedFont === "mono") setFont("Mono");
    if (savedFont === "serif") setFont("Serif");
    if (savedFont === "sans") setFont("Sans Serif");
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size={"fit"}
          className="text-preset-7 flex w-fit items-center gap-4 font-bold"
        >
          <span className="text-preset-7-bold md:text-preset-4 md:font-bold">
            {font || "Sans Serif"}
          </span>
          <ChevronDown className="stroke-primary size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup className="flex flex-col gap-4">
          <DropdownMenuItem onClick={handleClickInter}>
            <span className="text-preset-7-bold md:text-preset-4 font-sans md:font-bold">
              Sans Serif
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleClickLora}>
            <span className="text-preset-7-bold md:text-preset-4 font-serif md:font-bold">
              Serif
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleClickInconsolata}>
            <span className="text-preset-4 font-mono font-bold">Mono</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default FontProvider;
