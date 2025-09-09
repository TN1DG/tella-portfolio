"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-6">
          Error
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-800 mb-4">
          Something went wrong!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => reset()}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
          <button 
            onClick={() => window.location.href = "/"}
            className="px-6 py-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
}
