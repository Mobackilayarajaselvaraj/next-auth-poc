// src/components/auth/SignInButton.tsx
"use client";

import { signIn } from "next-auth/react";

export function SignInButton() {
  return (
    <button
      onClick={() => signIn("azure-ad", { callbackUrl: "/dashboard" })}
      className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded cursor-pointer"
    >
      Sign in
    </button>
  );
}