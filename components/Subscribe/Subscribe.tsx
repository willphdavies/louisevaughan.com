"use client";
import React, { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError("Subscription failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during subscription:", err);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-xl">
      {isSubmitted ? (
        <p className="text-green-600">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-gray-600">
            Email address
          </label>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full py-2 px-3 text-sm text-gray-900 bg-white border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              placeholder="your@email.com"
              required
            />
            <button
              type="submit"
              className="h-[42px] bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 rounded-md shadow-sm transition-all duration-200"
            >
              Subscribe
            </button>
          </div>
          <p className={`text-sm ${error ? "text-red-600" : "text-gray-500"}`}>
            {error || "We'll never share your details."}
          </p>
        </form>
      )}
    </div>
  );
}
