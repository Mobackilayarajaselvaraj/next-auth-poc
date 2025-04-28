// src/components/auth/SignOutButton.tsx
"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded cursor-pointer"
    >
      Sign out
    </button>
  );
}
