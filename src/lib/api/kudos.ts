import { supabase } from '$lib/supabaseClient';

export async function getNumberOfKudosClicks() {
	let { data } = await supabase.from('kudos_clicks').select('count');
	if (!data) return null;
	const numberOfKudosClicks = data[0].count;
	return numberOfKudosClicks;
}
