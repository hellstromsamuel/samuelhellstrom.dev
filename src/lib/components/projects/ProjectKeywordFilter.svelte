<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import { cn } from "$lib/utils.js";

	export let keywordFilters: string[] = [];
	export let uniqueKeywords: string[] = [];

	function toggleKeyword(keyword: string) {
		if (keywordFilters.includes(keyword)) {
			keywordFilters = keywordFilters.filter((k) => k !== keyword);
		} else {
			keywordFilters = [...keywordFilters, keyword];
		}
	}
</script>

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
		<Button size="sm" class="text-xs" variant="destructive" on:click={() => (keywordFilters = [])}
			>Fjern ({keywordFilters.length})</Button
		>
	{/if}
</div>
