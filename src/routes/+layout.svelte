<script>
	import Header from "./Header.svelte";
	import "../app.css";
	import "@fontsource/ibm-plex-mono/400.css";
	import "@fontsource/ibm-plex-mono/700.css";
</script>

<div class="bg-background flex min-h-screen flex-col">
	<Header />

	<main class="mx-auto flex w-full max-w-2xl flex-1 flex-col flex-col gap-8 px-4 py-8">
		<slot />
	</main>
</div>

<style>
	:global(body) {
		font-family: "IBM Plex Mono", monospace;
	}
</style>
