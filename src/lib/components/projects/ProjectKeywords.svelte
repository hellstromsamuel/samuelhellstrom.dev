<script>
	import { cn } from "$lib/tailwindind";

	export let project;
	export let limit = -1;
	export let keywordClass = "";

	$: keywordsToShow = project.keywords.slice(0, limit);
</script>

<div class="flex flex-wrap gap-2">
	{#each keywordsToShow as keyword}
		<span class={cn("rounded bg-gray-100 px-2 dark:bg-gray-800", keywordClass)}>{keyword.name}</span
		>
	{/each}

	{#if limit !== -1 && project.keywords.length > limit}
		<span class={cn("rounded bg-gray-100 px-2 dark:bg-gray-800", keywordClass)}
			>+{project.keywords.length - limit}</span
		>
	{/if}
</div>
