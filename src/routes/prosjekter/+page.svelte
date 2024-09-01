<script lang="ts" type="module">
	import ProjectCard from "$lib/components/projects/ProjectCard.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import NavigateBackLink from "$lib/components/ui/link/NavigateBackLink.svelte";
	import { cn } from "$lib/utils.js";

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

	function toggleKeyword(keyword: string) {
		if (keywordFilters.includes(keyword)) {
			keywordFilters = keywordFilters.filter((k) => k !== keyword);
		} else {
			keywordFilters = [...keywordFilters, keyword];
		}
	}
</script>

<NavigateBackLink href="/" label="Om meg" />
<h1>Prosjekter 🧑‍💻</h1>
<div class="grid gap-8">
	{#if allKeyswords.length > 0}
		<div>
			<p class="mb-2 text-sm font-bold">Filtrer på nøkkelord</p>
			<div class="flex flex-wrap gap-2">
				{#each uniqueKeywords as keyword}
					<Button
						size="sm"
						on:click={() => toggleKeyword(keyword)}
						variant={keywordFilters.includes(keyword) ? "secondary" : "outline"}
						class={cn(keywordFilters.includes(keyword) && "text-primary font-semibold")}
					>
						{keyword}
					</Button>
				{/each}

				{#if keywordFilters.length > 0}
					<Button
						size="sm"
						class="text-xs"
						variant="destructive"
						on:click={() => (keywordFilters = [])}>Fjern ({keywordFilters.length})</Button
					>
				{/if}
			</div>
		</div>
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
