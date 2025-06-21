"use client";

import * as React from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "../components/ui/command"; // adjust if your path differs
import { Button } from "../components/ui/button";
import { CommandIcon } from "lucide-react";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);

  // Shortcut: Cmd + J or Ctrl + J
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* Floating Button to Trigger Command Dialog */}
      <Button
        onClick={() => setOpen(!open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 flex rounded-full shadow-2xl print:hidden"
      >
        <CommandIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>

      {/* Actual Command Dialog */}
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
              Print
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
                {title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};
