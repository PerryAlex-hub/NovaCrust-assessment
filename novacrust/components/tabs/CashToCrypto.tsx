"use client";
import { useState } from "react";

const CashToCrypto = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleUpdate = async () => {
    setError(null);
    setSuccess(null);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 700));
      setSuccess("Thanks — we'll notify you when Cash to Crypto is live.");
      setEmail("");
    } catch (e) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = loading || email.trim() === "" || !validateEmail(email);

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
        <label htmlFor="notify-email" className="text-[#013941] font-medium">
          Email
        </label>
        <input
          id="notify-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
            if (success) setSuccess(null);
          }}
          className="border border-gray-300 rounded-full p-4 w-full mt-2 outline-none"
          placeholder="Enter your email"
        />

        <div className="mt-2" role="status" aria-live="polite">
          {error && <div className="text-sm text-red-600">{error}</div>}
          {success && <div className="text-sm text-green-600">{success}</div>}
        </div>
      </div>

      <div>
        <button
          disabled={isDisabled}
          aria-disabled={isDisabled}
          onClick={handleUpdate}
          className={`w-full mt-15 bg-[#013941] text-white p-4 rounded-full font-semibold ${
            isDisabled ? "opacity-60" : ""
          }`}
        >
          {loading ? "Updating…" : "Update me"}
        </button>
      </div>
    </div>
  );
};

export default CashToCrypto;
