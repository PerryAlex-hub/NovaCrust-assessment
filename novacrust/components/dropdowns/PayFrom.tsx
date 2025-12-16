"use client";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Command, CommandGroup, CommandItem, CommandList } from "../ui/command";

type PayFromProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const PayFrom = ({ value: outerValue, onChange }: PayFromProps) => {
  const coins = [
    { value: "metamask", label: " Metamask", icon: "/images/Metamask.png" },
    { value: "rainbow", label: "Rainbow", icon: "/images/Rainbow.png" },
    {
      value: "walletConnect",
      label: "WalletConnect",
      icon: "/images/WalletConnect.png",
    },
    {
      value: "other",
      label: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
      icon: "/images/Wallet.png",
    },
  ];

  const [internalValue, setInternalValue] = useState("");
  const currentValue = outerValue ?? internalValue;

  const selected = coins.find((c) => c.value === currentValue);

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
            aria-label="Select pay from option"
            className="w-full  p-6 border border-gray-200 rounded-full flex justify-between items-center gap-2 overflow-hidden "
          >
            {selected ? (
              <span className="flex  gap-2">
                <Image
                  src={selected.icon}
                  alt={selected.label}
                  width={20}
                  height={20}
                />
                {selected.label}
              </span>
            ) : (
              <p className="text-[#013941]">Select an option</p>
            )}
            <div>
              <ChevronDown className="h-7 w-7 text-[#013941] opacity-50" />
            </div>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-full p-0">
          <Command>
            <CommandList>
              <CommandGroup>
                {coins.map((coin) => (
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

export default PayFrom;
