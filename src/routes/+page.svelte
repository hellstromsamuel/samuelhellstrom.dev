<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import ExternalLink from '$lib/components/ui/external-link/ExternalLink.svelte';
	import { Heart } from 'lucide-svelte';
	import ConfettiOnClick from '$lib/components/confetti/ConfettiOnClick.svelte';
	import image from '$lib/assets/samuelhellstrom.png';
	import { supabase } from '$lib/supabaseClient';

	export let data;
	let kudos_clicks = data.numberOfKudosClicks;

	async function addKudosClick() {
		kudos_clicks += 1;
		await supabase.from('kudos_clicks').insert({}).single();
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
	<div class="flex gap-2">
		<ConfettiOnClick>
			<Button class="flex w-full items-center gap-2 text-lg" size="lg" on:click={addKudosClick}
				>Gi kudos
			</Button>
		</ConfettiOnClick>

		<div class="flex h-11 items-center items-center gap-2 rounded-2xl border px-4">
			<span>{kudos_clicks}</span>
			<Heart color="red" />
		</div>
	</div>
	<span class="text-xs opacity-50 md:text-sm"> Som Strava, og du får se en kul animasjon! </span>
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
		sammen med noen venner, hvor jeg er CTO. Til høsten starter jeg også i jobben som utvikler i konsulentselskapet
		<ExternalLink href="https://knowit.no">Knowit</ExternalLink>.
	</p>
</section>

<section>
	<h2>
		Om
		<span class="bg-gray-200 dark:bg-gray-700"> samuelhellstrom.dev </span>
	</h2>
	<p>
		Jeg har hatt noen sporadiske forsøk på å lage en personlig nettside tidligere, med tanken om at
		jeg skulle skille meg ut i jobbsøknader. Nå vil jeg heller bare å lage en sikkelig rå nettside,
		mest fordi jeg synes det er gøy å programmere 🚀.
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
		<li>
			UI:
			<ExternalLink href="https://tailwindcss.com/">Tailwind</ExternalLink>,
			<ExternalLink href="https://www.shadcn-svelte.com/">Shadcn-Svelte</ExternalLink>
		</li>
		<li>Hosting: <ExternalLink href="https://vercel.com">Vercel</ExternalLink></li>
		<li>
			Domene: <ExternalLink href="https://domene.shop">Domeneshop</ExternalLink> (samuelhellstrom.dev)
		</li>
		<li>Database: TBA 📣</li>
		<li>Blog: TBA 📣</li>
	</ul>
</section>
