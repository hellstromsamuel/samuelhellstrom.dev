<script>
	import ExternalLink from "$lib/components/ui/link/ExternalLink.svelte";
	import Hero from "$lib/components/front-page/Hero.svelte";
	import H2 from "$lib/components/ui/text/H2.svelte";
	</script>

<section>
	<Hero />
</section>

<section>
	<H2>Mer om meg</H2>
	<p>
		Helt siden jeg var liten har jeg alltid elsket å bygge ting, bare at nå er LEGO byttet ut med
		kode.
	</p>
	<p>
		Jeg har mastergrad i
		<ExternalLink href="https://uio.no/studier/program/informatikk-ledelse/"
			>Informatikk: Digital økonomi og ledelse</ExternalLink
		> på UiO (anbefales!). Sommeren 2022 var jeg på Gründerskolen i Boston for å prøve noe nytt og utforske
		gründerspiren i meg.
	</p>
	<p>
		Det førte til at jeg startet selskapet
		<ExternalLink href="https://easyplay.no">EasyPlay 💚</ExternalLink>
		sammen med noen venner, hvor jeg er CTO. Ved siden av dette jobber jeg som utvikler i konsulentselskapet
		<ExternalLink href="https://knowit.no">Knowit</ExternalLink>.
	</p>
</section>

<section>
	<H2>Nettsiden</H2>
	<p>
		Jeg ville egentlig bare lage en heftig nettside og utforske nye teknologier 🚀 I tillegg synes
		jeg blåfargen var kul 🤠
	</p>
	<p>Mer info om nettsiden til tech-geeks som meg:</p>

	<ul class="list-disc pl-8">
		<li>
			Frontend rammeverk:
			<ExternalLink href="https://kit.svelte.dev/">SvelteKit</ExternalLink>
			med Typescript
		</li>
		<li>CMS: <ExternalLink href="https://sanity.io/">Sanity</ExternalLink></li>
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
			Domene: <ExternalLink href="https://domene.shop">Domeneshop</ExternalLink> (saamuel.dev, samuelhellstrom.dev)
		</li>
	</ul>
</section>
