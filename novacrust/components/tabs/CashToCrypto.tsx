"use client";
import { useState } from "react";

const CashToCrypto = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="space-y-6 mt-5 pb-15 ">
      <div className="mt-15 container mx-auto flex flex-col items-center text-[#013941] font-medium text-3xl">
        Coming soon!
      </div>

      <div className="text-gray-500 text-xl text-center">
        Cash to Crypto is almost here. <br />
        Enter your email and we&apos;ll let you know the moment it&apos;s live.
      </div>

      <div className="flex flex-col ">
        <p className="text-[#013941] font-medium">Email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border border-gray-300 rounded-full p-4 w-full mt-2 outline-none"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <button className="w-full mt-15 bg-[#013941] text-white p-4 rounded-full font-semibold">
          Update me
        </button>
      </div>
    </div>
  );
};

export default CashToCrypto;
