import { redirect } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  if (!isValidPage(params.slug)) {
    redirect("../_not-found.tsx"); // ✅ Redirect to custom 404 page
  }

  return <div>Valid Page: {params.slug}</div>;
}

function isValidPage(slug: string): boolean {
  // Example validation logic
  const validPages = ["home", "about", "contact"];
  return validPages.includes(slug);
}
