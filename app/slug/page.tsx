"use client"; // ✅ Ensure this is a Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  params: { slug?: string };
}

export default function Page({ params }: Props) {
  const router = useRouter();
  const slug = params.slug ?? ""; // Ensure slug is always a string

  useEffect(() => {
    if (!isValidPage(slug)) {
      router.push("/not-found"); // 
    }
  }, [slug, router]);

  if (!isValidPage(slug)) {
    return null; // 
  }

  return <div>Valid Page: {slug}</div>;
}

function isValidPage(slug: string): boolean {
  const validPages = ["Apply", "Competitions"];
  return validPages.includes(slug);
}
