<script>
	import Header from "./Header.svelte";
	import "../app.css";
	import "@fontsource/ibm-plex-mono/400.css";
	import "@fontsource/ibm-plex-mono/700.css";
	import { cn } from "$lib/utils/tailwind";
	import ExternalLink from "$lib/components/ui/link/ExternalLink.svelte";
</script>

<div class={cn("landing-page-font bg-background")}>
	<div class="mx-auto flex min-h-screen max-w-5xl flex-col">
		<Header />
		<main class="flex w-full flex-1 flex-col gap-8 px-4 py-8">
			<slot />
		</main>


		<footer class="flex w-full justify-center px-4">
			<div class="flex items-center md:flex-row flex-col gap-6 border-t w-full py-8">
				<p class="text-lg">
					Samuel Hellstrøm &copy; {new Date().getFullYear()}
				</p>

				<div class="flex items-center gap-3">

					<ExternalLink href="https://www.linkedin.com/in/samuel-hellstrom/">LinkedIn</ExternalLink>
					<ExternalLink href="https://github.com/hellstromsamuel">GitHub</ExternalLink>

				</div>
			</div>
		</footer>
	</div>
</div>

<style>
	.landing-page-font {
		font-family: "IBM Plex Mono", monospace;
	}
</style>
