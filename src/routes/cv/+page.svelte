<script lang="ts" type="module">
	import ProjectCard from "$lib/components/projects/ProjectCard.svelte";
	import NavigateBackLink from "$lib/components/ui/link/NavigateBackLink.svelte";
	import { navRoutes } from "$lib/utils/navigation.js";

	export let data;
	let projects = data.projects;

	let pageTitle = navRoutes.find((route) => route.href === "/cv")?.text;
</script>

<NavigateBackLink href="/" label={navRoutes.find((route) => route.href === "/")?.text} />
<h1>{pageTitle}</h1>

<div class="grid gap-8">
	<div>
		<p class="mb-2 text-sm font-bold">Prosjekter ({projects.length})</p>
		<div class="flex flex-col gap-6">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</div>
