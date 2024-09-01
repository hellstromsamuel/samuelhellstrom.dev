import { fetchProjectBySlug } from "$lib/api/projects.js";

export async function load({ params }) {
	try {
		const data = await fetchProjectBySlug(params.slug);
		return { project: data };
	} catch (error) {
		return { project: null };
	}
}
