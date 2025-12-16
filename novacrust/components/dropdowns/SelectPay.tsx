"use client";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

const SelectPay = () => {
  const coins = [
    { value: "celo", label: "USDT - CELO", icon: "/images/CELO.png" },
    { value: "ethereum", label: "Ethereum", icon: "/images/ETH.png" },
    { value: "ton", label: "USDT - TON", icon: "/images/TON.png" },
    { value: "bnb", label: "USDT - BNB", icon: "/images/BNB.png" },
  ];

  const [value, setValue] = useState("");

  const selected = coins.find((c) => c.value === value);

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
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
              "Select Coin"
            )}
            <div>
              <ChevronDown className="h-7 w-7 opacity-50" />
            </div>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-55 p-0">
          <Command>
            <CommandInput placeholder="Search" />
            <CommandEmpty>No coin found.</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {coins.map((coin) => (
                  <CommandItem
                    key={coin.value}
                    value={coin.label}
                    onSelect={() => setValue(coin.value)}
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
                        value === coin.value ? "opacity-100" : "opacity-0"
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

export default SelectPay;
