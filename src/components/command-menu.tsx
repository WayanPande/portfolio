"use client";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import { CommandIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface Props {
  links: { url: string; title: string }[];
}

function useOperatingSystem() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    const checkPlatform = () => {
      setIsMac(
        typeof navigator !== "undefined" &&
          /Mac|iPod|iPhone|iPad/.test(
            navigator.platform || navigator.userAgent,
          ),
      );
    };

    checkPlatform();
  }, []);

  return isMac;
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = useState(false);

  const isMac = useOperatingSystem();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (isMac ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isMac]);

  return (
    <>
      <p className="border-t-muted text-muted-foreground fixed right-0 bottom-0 left-0 hidden border-t bg-white p-1 text-center text-sm xl:block print:hidden">
        Press{" "}
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className={cn(isMac ? "text-xs" : "hidden")}>⌘ J</span>
          <span className={cn(!isMac ? "text-xs" : "hidden")}>Ctrl J</span>
        </kbd>{" "}
        to open the command menu
      </p>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed right-4 bottom-4 flex rounded-full shadow-2xl xl:hidden print:hidden"
      >
        <CommandIcon className="my-6 size-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
            >
              <span>Print</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};
