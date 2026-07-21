import { notFound } from "next/navigation";
import { projects } from "@/data/agencyData";
import { ProjectDetailClient } from "@/components/pages/ProjectDetailClient";

export const revalidate = 2592000;

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const projectIndex = projects.findIndex((p) => p.id === params.id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  
  // Get the next project for the infinite loop footer
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return <ProjectDetailClient project={project} nextProject={nextProject} />;
}
