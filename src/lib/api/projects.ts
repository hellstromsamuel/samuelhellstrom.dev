import { sanityClient } from "$lib/sanity/sanityClient";
import type { Project } from "$lib/types/sanity/Project";

const projectPropertyQuery = `{
  _id,
  name,
  slug,
  company->{_id, name, website, logo{asset->{url}}, description},
  role,
  description,
  keywords[]->{_id, name},
  image{
    asset->{
      _id,
      url
    }
  }, 
  link,
  fromDate,
  toDate,
  highlight
}`;
export const fetchProjects = async () => {
	const query = `*[_type == "project"] | order(toDate desc, highlight desc) ${projectPropertyQuery}`;
	const projects: Project[] = await sanityClient.fetch(query);
	return projects;
};

export const fetchProjectBySlug = async (slug: string) => {
	const query = `*[_type == "project" && slug.current == $slug][0] ${projectPropertyQuery}`;
	const project: Project = await sanityClient.fetch(query, { slug });
	return project;
};
