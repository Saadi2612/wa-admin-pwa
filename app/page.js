"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin");
  }, []);

  return (
    <main className="flex flex-col items-center justify-start w-full h-auto p-4"></main>
  );
}
