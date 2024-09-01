import { getNumberOfKudosClicks } from "$lib/api/kudos";

export async function load() {
	const data = await getNumberOfKudosClicks();
	return { numberOfKudosClicks: data };
}
