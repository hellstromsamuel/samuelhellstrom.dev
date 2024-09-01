<script>
	import Button from "$lib/components/ui/button/button.svelte";
	import ExternalLink from "$lib/components/ui/link/ExternalLink.svelte";
	import { Heart, ThumbsUp } from "lucide-svelte";
	import ConfettiOnClick from "$lib/components/confetti/ConfettiOnClick.svelte";
	import image from "$lib/assets/samuelhellstrom.webp";
	import { supabase } from "$lib/supabaseClient";

	export let data;
	let kudos_clicks = data.numberOfKudosClicks;

	async function addKudosClick() {
		kudos_clicks += 1;
		await supabase.from("kudos_clicks").insert({}).single();
	}
</script>

<div class="flex flex-col items-center gap-8 sm:flex-row">
	<section>
		<h1>Hei 👋</h1>
		<p>
			Velkommen til min personlige nettside. Mitt navn er <strong>Samuel Hellstrøm</strong> og jeg er
			fullstack-utvikler / gründer / idrettsutøver. Helt siden jeg var liten har jeg alltid elsket å
			bygge ting, bare at nå er LEGO byttet ut med kode.
		</p>
	</section>
	<img src={image} alt="Bilde av Samuel Hellstrøm" class="rounded-3xl sm:max-w-[300px]" />
</div>

<div class="my-4 grid w-full gap-1 text-center">
	<ConfettiOnClick>
		<Button class="flex w-full items-center gap-2 text-lg" size="lg" on:click={addKudosClick}
			>Gi kudos <ThumbsUp class="h-4 w-4" />
		</Button>
	</ConfettiOnClick>

	<div class="flex items-center justify-center gap-2">
		<span class="text-sm md:text-base">Som Strava + en kul animasjon! </span>
		<span class="flex items-center gap-1 rounded-full border px-2 py-1 text-sm font-bold">
			{kudos_clicks}
			<Heart class="h-5 w-5 text-red-500" />
		</span>
	</div>
</div>

<section>
	<h2>Mer om meg</h2>
	<p>
		Fra den dagen jeg begynte å programmere i IT1 på videregående så jeg vært opptatt av at
		løsninger skal se og føles ekstra bra ut for brukeren. Etterhvert har jeg heldigvis innsett at
		fargen på en knapp ikke kommer til å redde verden alene, og har utviklet ferdighetene mine på
		andre områder også 😉.
	</p>
	<p>
		Jeg har mastergrad i
		<ExternalLink href="https://uio.no/studier/program/informatikk-ledelse/"
			>Informatikk: Digital økonomi og ledelse</ExternalLink
		> på UiO (anbefales!) fra 2019-2024. I tillegg var jeg på Gründerskolen i Boston sommeren 2022 for
		å prøve noe nytt og utforske gründerspiren i meg. Det førte til at jeg startet selskapet
		<ExternalLink href="https://easyplay.no">EasyPlay 💚</ExternalLink>
		sammen med noen venner, hvor jeg er CTO. I august 2024 startet jeg også som utvikler i det nordiske
		konsulentselskapet
		<ExternalLink href="https://knowit.no">Knowit</ExternalLink>.
	</p>
</section>

<section>
	<h2>samuelhellstrom.dev</h2>
	<p>
		Jeg har hatt noen sporadiske forsøk på å lage en personlig nettside tidligere, med tanken om at
		jeg skulle skille meg ut i jobbsøknader. Nå vil jeg heller bare å lage en sikkelig rå nettside,
		fordi jeg synes det er gøy å utforske nye teknologier 🚀.
	</p>
	<p>
		Noe av det vanskeligste med å lage denne nettsiden var å velge hvilken farge jeg skulle bruke.
		Det ble til slutt blå, kun fordi jeg følte for det 🤠. Mer info om nettsiden til tech-geeks som
		meg:
	</p>

	<ul class="list-disc pl-6">
		<li>
			Frontend rammeverk:
			<ExternalLink href="https://kit.svelte.dev/">SvelteKit</ExternalLink>
			med Typescript
		</li>
		<li>CMS: <ExternalLink href="https://sanity.io/">Sanity</ExternalLink></li>
		<li>Database: <ExternalLink href="https://supabase.com">Supabase</ExternalLink></li>
		<li>
			UI:
			<ExternalLink href="https://tailwindcss.com/">Tailwind</ExternalLink>,
			<ExternalLink href="https://www.shadcn-svelte.com/">Shadcn-Svelte</ExternalLink>
		</li>
		<li>
			Font: <ExternalLink href="https://fontsource.org/fonts/ibm-plex-mono"
				>IBM Plex Mono</ExternalLink
			>
		</li>
		<li>Hosting: <ExternalLink href="https://vercel.com">Vercel</ExternalLink></li>
		<li>
			Domene: <ExternalLink href="https://domene.shop">Domeneshop</ExternalLink> (samuelhellstrom.dev)
		</li>
	</ul>
</section>
