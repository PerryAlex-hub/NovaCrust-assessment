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

  const [payCoin, setPayCoin] = useState<string | undefined>("ethereum");
  const [receiveCurrency, setReceiveCurrency] = useState<string | undefined>(
    "nigeria"
  );
  const [fromOption, setFromOption] = useState<string | undefined>(undefined);
  const [toOption, setToOption] = useState<string | undefined>(undefined);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isValid = () => {
    const amount = parseFloat(payAmount.replace(/[^0-9.]/g, ""));
    if (!amount || Number.isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount.");
      return false;
    }
    if (!payCoin) {
      setError("Select a coin to pay with.");
      return false;
    }
    if (!fromOption) {
      setError("Select where to pay from.");
      return false;
    }
    if (!toOption) {
      setError("Select where to pay to.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = async () => {
    if (!isValid()) return;

    setLoading(true);
    setSuccess(null);

    try {
      await new Promise((res) => setTimeout(res, 800));
      setSuccess("Conversion request submitted (mock). We'll notify you soon.");
    } catch (e) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-5 space-y-7 mx-auto max-w-2xl">
      <div className="p-6 border border-gray-200 rounded-4xl bg-white shadow-sm">
        <label className="text-gray-500 mb-2 block">You pay</label>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:space-x-5 space-y-3 sm:space-y-0">
          <div className="rounded-2xl flex-1 w-full">
            <input
              aria-label="pay amount"
              className="w-full text-2xl sm:text-3xl font-bold mb-2 outline-none"
              value={payAmount}
              onChange={(e) => {
                const raw = e.target.value.replace(/[^0-9.]/g, "");
                setPayAmount(raw);
              }}
              onBlur={() => setPayAmount(formatCurrency(payAmount))}
              type="text"
            />
          </div>

          <div className="bg-white flex shrink-0 rounded-full h-12 items-center px-3 w-full sm:w-auto">
            <SelectPay value={payCoin} onChange={(v) => setPayCoin(v)} />
          </div>
        </div>
      </div>

      <div className="p-6 border border-gray-200 rounded-4xl bg-white shadow-sm">
        <label className="text-gray-500 mb-2 block">You receive</label>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:space-x-5 space-y-3 sm:space-y-0">
          <div className="rounded-2xl flex-1 w-full">
            <input
              aria-label="receive amount"
              className="w-full text-2xl sm:text-3xl font-bold mb-2 outline-none"
              value={receiveAmount}
              onChange={(e) => {
                const raw = e.target.value.replace(/[^0-9.]/g, "");
                setReceiveAmount(raw);
              }}
              onBlur={() => setReceiveAmount(formatCurrency(receiveAmount))}
              type="text"
            />
          </div>

          <div className="bg-white flex shrink-0 rounded-full h-12 items-center px-3 w-full sm:w-auto">
            <SelectReceive
              value={receiveCurrency}
              onChange={(v) => setReceiveCurrency(v)}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="mb-3 font-medium text-[#013941]">Pay from</div>
        <div>
          <PayFrom value={fromOption} onChange={(v) => setFromOption(v)} />
        </div>
      </div>

      <div>
        <div className="mb-3 font-medium text-[#013941]">Pay to</div>
        <div>
          <PayTo value={toOption} onChange={(v) => setToOption(v)} />
        </div>
      </div>

      <div>
        <button
          aria-disabled={loading}
          disabled={loading}
          onClick={handleSubmit}
          className={`w-full ${
            loading ? "opacity-70" : ""
          } bg-[#013941] text-white py-4 rounded-full font-semibold text-lg shadow-md`}
        >
          {loading ? "Processing…" : "Convert now"}
        </button>

        <div
          className="mt-3 min-h-6"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {error && <div className="text-sm text-red-600">{error}</div>}
          {success && <div className="text-sm text-green-600">{success}</div>}
        </div>
      </div>
    </div>
  );
};

export default CryptoToCash;
