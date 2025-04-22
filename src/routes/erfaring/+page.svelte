<script lang="ts" type="module">
	import ProjectKeywordFilter from "$lib/components/projects/ProjectKeywordFilter.svelte";
	import ProjectCard from "$lib/components/projects/ProjectCard.svelte";

	export let data;

	let keywordFilters: string[] = [];
	$: allKeyswords = projects.flatMap((project) => project.keywords).map((keyword) => keyword.name);
	$: uniqueKeywords = [...new Set(allKeyswords)];

	let projects = data.projects;
	$: filteredProjects = projects.filter((project) => {
		const hasAllKeywords = keywordFilters.every((keyword) =>
			project.keywords.map((k) => k.name).includes(keyword)
		);
		return hasAllKeywords;
	});
</script>

<h1>Erfaring 🧑‍💻</h1>

<div class="grid gap-8">
	{#if allKeyswords.length > 0}
		<div class="grid gap-2">
			<p class="mb-2 text-sm font-bold">Filtrer på nøkkelord</p>
			<ProjectKeywordFilter bind:keywordFilters {uniqueKeywords} />
		</div>
	{:else}
		<ProjectKeywordFilter bind:keywordFilters {uniqueKeywords} />
	{/if}

	<div>
		<p class="mb-2 text-sm font-bold">Prosjekter ({filteredProjects.length})</p>

		<div class="flex flex-col gap-6">
			{#each filteredProjects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</div>
