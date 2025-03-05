import { fetchProjects } from "$lib/api/projects";

export async function load() {
	const data = await fetchProjects();
	return { projects: data || [] };
}
