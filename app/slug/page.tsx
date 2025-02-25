import type { Metadata } from "next";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

// ✅ Server-side metadata generation (removes unused `parent` parameter)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  if (!isValidPage(slug)) {
    return {
      title: "Page Not Found",
      description: "The requested page does not exist.",
      openGraph: {
        images: ["/not-found-image.jpg"],
      },
    };
  }

  return {
    title: `${slug} - My Website`,
    description: `Learn more about ${slug}.`,
    openGraph: {
      images: [`/images/${slug}.jpg`],
    },
  };
}

// ✅ Handles navigation directly (no hydration issues)
export default async function Page({ params }: Props) {
  const slug = (await params).slug;

  if (!isValidPage(slug)) {
    redirect("/not-found"); // ✅ Server-side redirect
  }

  return <div>Valid Page: {slug}</div>;
}

// ✅ Validation Function
function isValidPage(slug: string): boolean {
  const validPages = ["apply", "competitions"];
  return validPages.includes(slug.toLowerCase());
}
