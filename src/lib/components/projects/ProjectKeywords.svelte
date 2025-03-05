<script>
	import { cn } from "$lib/utils/tailwind";

	export let project;
	export let keywordClass = "";
</script>

<div class="flex flex-wrap gap-2">
	{#each project.keywords as keyword}
		<span class={cn("rounded bg-gray-100 px-2 dark:bg-gray-800", keywordClass)}>{keyword.name}</span
		>
	{/each}
</div>
