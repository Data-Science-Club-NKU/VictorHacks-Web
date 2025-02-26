import type { Metadata } from "next";
import { redirect } from "next/navigation";

interface Props {
  params: { slug: string }; // Remove the Promise wrapper
}

// Fix metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug; // Access directly, no await needed
  
  if (!slug || !isValidPage(slug)) {
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

// Fix page component
export default function Page({ params }: Props) { // Can be async if needed, but params is not a Promise
  const slug = params.slug; // Access directly
  
  if (!slug || !isValidPage(slug)) {
    redirect("/not-found");
  }
  
  return <div>Valid Page: {slug}</div>;
}

// Validation function
function isValidPage(slug: string): boolean {
  const validPages = ["apply", "competitions"];
  return validPages.includes(slug.toLowerCase());
}