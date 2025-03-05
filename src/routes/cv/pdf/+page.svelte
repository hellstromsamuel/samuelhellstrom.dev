<script lang="ts" type="module">
	import { page } from "$app/stores";
	import image from "$lib/assets/samuelhellstrom.webp";
	import ProjectPreview from "$lib/components/projects/ProjectPreview.svelte";
	import ExternalLink from "$lib/components/ui/link/ExternalLink.svelte";

	export let data;
	let projects = data.projects;

	let currentOrigin;
	$: currentOrigin = $page.url.origin;
</script>

<div class="space-y-4">
	<div class="flex justify-between">
		<div class="space-y-2">
			<h1 class="text-xl md:text-2xl">Samuel Hellstrøm</h1>
			<p>Utvikler | Gründer | Idrettsutøver</p>
			<div class="flex flex-wrap gap-2">
				<ExternalLink href={`${currentOrigin}/cv`} target="">saamuel.dev</ExternalLink>
				<ExternalLink href="mailto:hellstromsamuel@gmail.com" target=""
					>hellstromsamuel@gmail.com</ExternalLink
				>
			</div>
		</div>

		<img src={image} alt="Bilde av Samuel Hellstrøm" class="aspect-square h-20 w-20 rounded-full" />
	</div>

	<hr />

	<div class="space-y-8">
		{#each projects as project}
			<ProjectPreview {project} />
		{/each}
	</div>
</div>
