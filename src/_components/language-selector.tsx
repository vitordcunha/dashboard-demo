"use client";

import { US, BR } from "country-flag-icons/react/3x2";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { cn } from "@/_lib/utils";

/**
 * LanguageSelector is a React component that renders a language selection dropdown.
 * It allows users to choose between different languages, displaying the selected language
 * with its corresponding flag icon.
 *
 * @returns {JSX.Element} A dropdown component for language selection.
 */
function LanguageSelector(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("PT");

  const languages = [
    {
      title: "EN",
      icon: <US className="size-5" />,
    },
    {
      title: "PT",
      icon: <BR className="size-5" />,
    },
  ];

  const selectedLanguage = languages.find(
    (framework) => framework.title === value
  ); // The current selected language

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[90px] gap-3"
          >
            {selectedLanguage!.icon}
            {selectedLanguage!.title}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search language..." />

            <CommandList>
              <CommandEmpty>No language found.</CommandEmpty>
              <CommandGroup>
                {languages.map((language) => (
                  <CommandItem
                    key={language.title}
                    value={language.title}
                    className="gap-2"
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === language.title ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {language.icon}
                    {language.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default LanguageSelector;
