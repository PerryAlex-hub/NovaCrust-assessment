"use client";
import PayFrom from "../dropdowns/PayFrom";
import SelectPay from "../dropdowns/SelectPay";
import SelectReceive from "../dropdowns/SelectReceive";

const CryptoToCash = () => {
  return (
    <div className="mt-5 space-y-7 mx-auto">
      <div className="p-6 border border-gray-200 rounded-4xl">
        <div className=" text-gray-500 mb-5">You pay</div>

        <div className="flex justify-between items-center space-x-5">
          <div className=" rounded-2xl flex-1">
            <input
              className="text-2xl outline-none font-bold mb-2"
              value="1.00"
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
              value="1.00"
              type="text"
            />
          </div>
          <div className="bg-white flex shrink-0  rounded-2xl">
            <SelectReceive />
          </div>
        </div>
      </div>

      <div>
        <div className="mb-3 font-semibold text-gray-700">Pay from</div>
        <div>
         <PayFrom />
        </div>
      </div>

      <div>
        <div className="mb-3 font-semibold text-gray-700">Pay to</div>
        <div>
          <select
            className="w-full p-4 border border-gray-200 rounded-full"
            name="payTo"
            id="payTo"
          >
            <option value="bank">Bank</option>
            <option value="wallet">Wallet</option>
          </select>
        </div>
      </div>

      <div>
        <button className="w-full bg-[#013941] text-white p-4 rounded-full font-semibold">
          Continue
        </button>
      </div>
    </div>
  );
};

export default CryptoToCash;
