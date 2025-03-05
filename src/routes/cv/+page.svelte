<script lang="ts" type="module">
	import { mediaQuery } from "svelte-legos";
	import ProjectCard from "$lib/components/projects/ProjectCard.svelte";
	import ProjectKeywordFilter from "$lib/components/projects/ProjectKeywordFilter.svelte";
	import CustomDrawer from "$lib/components/ui/custom/CustomDrawer.svelte";
	import NavigateBackLink from "$lib/components/ui/link/NavigateBackLink.svelte";
	import ProjectRemoveFiltersButton from "$lib/components/projects/ProjectRemoveFiltersButton.svelte";

	const isDesktop = mediaQuery("(min-width: 768px)");
	let open = false;

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

<NavigateBackLink href="/" label="Om meg" />
<h1>Prosjekter 🧑‍💻</h1>

<div class="grid gap-8">
	{#if allKeyswords.length > 0}
		{#if $isDesktop}
			<div>
				<p class="mb-2 text-sm font-bold">Filtrer på nøkkelord</p>
				<ProjectKeywordFilter bind:keywordFilters {uniqueKeywords} />
			</div>
		{:else}
			<div class="grid gap-2">
				<CustomDrawer
					{open}
					buttonLabel={`Filtrer på nøkkelord (${uniqueKeywords.length})`}
					title="Filtrer på nøkkelord"
					closeLabel={`Vis prosjekter (${filteredProjects.length})`}
					buttonClass="w-full"
					buttonVariant="outline"
				>
					<ProjectKeywordFilter bind:keywordFilters {uniqueKeywords} />
				</CustomDrawer>
				<ProjectRemoveFiltersButton bind:keywordFilters />
			</div>
		{/if}
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
