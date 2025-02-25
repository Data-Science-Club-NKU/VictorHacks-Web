import { redirect } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  if (!isValidPage(params.slug)) {
    redirect("/app/_not-found.tsx"); 
  }
  return <div>Valid Page: {params.slug}</div>;
}

function isValidPage(slug: string) {
  // Example validation logic
  const validPages = ["home", "about", "contact"];
  return validPages.includes(slug);
}
