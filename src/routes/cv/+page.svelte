<script lang="ts" type="module">
	import ProjectPreview from "$lib/components/projects/ProjectPreview.svelte";
	import { navRoutes } from "$lib/utils/navigation.js";

	export let data;
	let projects = data.projects;
	let pageTitle = navRoutes.find((route) => route.href === "/cv")?.text;
</script>

<div class="space-y-4">
	<h1>{pageTitle}</h1>
	<hr />

	<div class="space-y-8">
		{#each projects as project}
			<ProjectPreview {project} />
		{/each}
	</div>
</div>
