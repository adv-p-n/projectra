"use client";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center place-items-center h-screen">
      <SignUp />
    </div>
  );
}
