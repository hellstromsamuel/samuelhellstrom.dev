<script>
	import Button from "../ui/button/button.svelte";

	export let keywordFilters;
</script>

{#if keywordFilters.length > 0}
	<Button size="sm" class="text-xs" variant="destructive" on:click={() => (keywordFilters = [])}
		>Fjern filter ({keywordFilters.length})</Button
	>
{/if}
