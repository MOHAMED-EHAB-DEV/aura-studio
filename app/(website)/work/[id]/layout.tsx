import { Metadata } from "next";
import { projects } from "@/data/agencyData";


// 2. Dynamic Metadata generation for each project
export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "Project Not Found | AURA Studio",
    };
  }

  return {
    title: `${project.title} | AURA Studio Work`,
    description: project.description,
    openGraph: {
      title: `${project.title} - ${project.category}`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
