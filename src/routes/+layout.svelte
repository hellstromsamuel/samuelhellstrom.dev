<script>
	import Header from "./Header.svelte";
	import "../app.css";
	import "@fontsource/ibm-plex-mono/400.css";
	import "@fontsource/ibm-plex-mono/700.css";
</script>

<div class="bg-background">
	<div class="mx-auto flex min-h-screen max-w-5xl flex-col">
		<Header />

		<main class="flex w-full flex-1 flex-col gap-8 px-4 py-8">
			<slot />
		</main>
	</div>
</div>

<style>
	:global(body) {
		font-family: "IBM Plex Mono", monospace;
	}
</style>
