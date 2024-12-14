"use client"

import { SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex justify-center place-items-center h-screen">
      <SignIn />
    </div>
  );
}
