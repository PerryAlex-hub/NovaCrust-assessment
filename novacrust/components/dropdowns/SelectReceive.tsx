"use client";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Command, CommandGroup, CommandItem, CommandList } from "../ui/command";

type SelectReceiveProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const SelectReceive = ({ value: outerValue, onChange }: SelectReceiveProps) => {
  const currency = [
    { value: "nigeria", label: "NGN", icon: "/images/NGN.png" },
    { value: "usa", label: "USD", icon: "/images/USD.png" },
    { value: "britain", label: "GBP", icon: "/images/GBP.png" },
    { value: "canada", label: "CAD", icon: "/images/CAD.png" },
  ];

  const [internalValue, setInternalValue] = useState("");
  const currentValue = outerValue ?? internalValue;

  const selected = currency.find((c) => c.value === currentValue);

  const handleSelect = (v: string) => {
    if (onChange) onChange(v);
    else setInternalValue(v);
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            aria-label="Select currency"
            className="rounded-3xl flex gap-2 overflow-hidden "
          >
            {selected ? (
              <span className="flex items-center gap-2">
                <Image
                  src={selected.icon}
                  alt={selected.label}
                  width={20}
                  height={20}
                />
                {selected.label}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Image
                  src={currency[0].icon}
                  alt={currency[0].label}
                  width={20}
                  height={20}
                />
                {currency[0].label}
              </span>
            )}
            <div>
              <ChevronDown className="h-7 w-7 opacity-50" />
            </div>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-55 p-0">
          <Command>
            <CommandList>
              <CommandGroup>
                {currency.map((coin) => (
                  <CommandItem
                    key={coin.value}
                    value={coin.label}
                    onSelect={() => handleSelect(coin.value)}
                  >
                    <Image
                      src={coin.icon}
                      alt={coin.label}
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    {coin.label}
                    <Check
                      className={`ml-auto h-4 w-4 ${
                        currentValue === coin.value
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SelectReceive;
