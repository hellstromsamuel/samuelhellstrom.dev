<script>
	import Header from "./Header.svelte";
	import "../app.css";
	import "@fontsource/ibm-plex-mono/400.css";
	import "@fontsource/ibm-plex-mono/700.css";
	import { cn } from "$lib/utils/tailwind";
</script>

<div class={cn("landing-page-font bg-background")}>
	<div class="mx-auto flex min-h-screen max-w-5xl flex-col">
		<Header />
		<main class="flex w-full flex-1 flex-col gap-8 px-4 py-8">
			<slot />
		</main>
	</div>
</div>

<style>
	.landing-page-font {
		font-family: "IBM Plex Mono", monospace;
		font-size: 1.1rem;

		@media only screen and (min-width: 768px) {
			font-size: 1.5rem;
		}
	}
</style>
