// src/app/page.tsx

import { SignInButton } from "@/components/auth/SignInButton";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions);
    if (session) {
      redirect("/dashboard");
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-3 text-stone-700">Next JS Auth (next-auth)</h1>
      <p className="mb-8 text-gray-400">MS Azure AD as an Identity provider</p>
      <SignInButton />
    </main>
  );
}
