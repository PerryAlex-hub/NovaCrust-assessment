"use client";
import { useState } from "react";
import PayFrom from "../dropdowns/PayFrom";
import PayTo from "../dropdowns/PayTo";
import SelectPay from "../dropdowns/SelectPay";
import SelectReceive from "../dropdowns/SelectReceive";
import formatCurrency from "@/lib/formatter";

const CryptoToCash = () => {
  const [payAmount, setPayAmount] = useState("1.00");
  const [receiveAmount, setReceiveAmount] = useState("1.00");

  return (
    <div className="mt-5 space-y-7 mx-auto">
      <div className="p-6 border border-gray-200 rounded-4xl">
        <div className=" text-gray-500 mb-5">You pay</div>

        <div className="flex justify-between items-center space-x-5">
          <div className=" rounded-2xl flex-1">
            <input
              className="text-2xl outline-none font-bold mb-2"
              value={payAmount}
              onChange={(e) => {
                const raw = e.target.value.replace(/[^0-9.]/g, ""); 
                setPayAmount(raw);
              }}
              onBlur={() => setPayAmount(formatCurrency(payAmount))}
              type="text"
            />
          </div>
          <div className="bg-white flex shrink-0 rounded-2xl">
            <SelectPay />
          </div>
        </div>
      </div>

      <div className="p-6 border border-gray-200 rounded-4xl">
        <div className=" text-gray-500 mb-5">You receive</div>

        <div className="flex justify-between items-center space-x-5">
          <div className=" rounded-2xl flex-1">
            <input
              className="text-2xl outline-none font-bold mb-2"
              value={receiveAmount}
              onChange={(e) => {
                const raw = e.target.value.replace(/[^0-9.]/g, ""); 
                setReceiveAmount(raw);
              }}
              onBlur={() => setReceiveAmount(formatCurrency(payAmount))}
              type="text"
            />
          </div>
          <div className="bg-white flex shrink-0  rounded-2xl">
            <SelectReceive />
          </div>
        </div>
      </div>

      <div>
        <div className="mb-3 font-medium text-[#013941]">Pay from</div>
        <div>
          <PayFrom />
        </div>
      </div>

      <div>
        <div className="mb-3 font-medium text-[#013941]">Pay to</div>
        <div>
          <PayTo />
        </div>
      </div>

      <div>
        <button className="w-full bg-[#013941] text-white p-4 rounded-full font-semibold">
          Convert now
        </button>
      </div>
    </div>
  );
};

export default CryptoToCash;
