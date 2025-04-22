import { fetchCompanyListBlock } from "$lib/api/companies";
import { fetchProjects } from "$lib/api/projects";

export async function load() {
	const projects = await fetchProjects();
	const companiesListBlock = await fetchCompanyListBlock("erfaringer");
	return { projects: projects || [], companiesListBlock: companiesListBlock };
}
