// src/app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/auth/SignOutButton";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* <h1 className="text-4xl font-bold mb-8">Dashboard</h1> */}
      <h2 className="text-2xl font-bold mb-4">Welcome, <span className="text-indigo-500">{session?.user?.name || "User"}!</span></h2>
      <p className="mb-8">Email: {session.user?.email}</p>  
      <SignOutButton />
      <p className="mb-8">Access Token: 
        <code className="block bg-gray-100 p-2 rounded mt-2 overflow-x-auto whitespace-pre-wrap break-all text-xs">
          {(session as any).accessToken}
        </code>
      </p>
      
    </main>
  );
}
