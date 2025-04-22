<script lang="ts">
	import type { Company } from "$lib/types/sanity/Company";
	import H2 from "../ui/text/H2.svelte";

	export let company: Company;

	function formatTime(time: string) {
		return time.slice(0, 7);
	}
</script>

<div class="grid gap-4">
	<div class="flex justify-between flex-wrap-reverse gap-4">
		<div class="flex items-center gap-4">
			{#if company.logo}
				<img
					src={company.logo.asset.url}
					alt={`${company.name} logo`}
					class="h-16 w-16 rounded-lg object-contain"
				/>
			{/if}
			<div>
				<H2>{company.name}</H2>
				<p class="text-muted-foreground">{company.role}</p>
			</div>
		</div>
		<p>
			{formatTime(company.timeFrom)} - {company.timeTo ? formatTime(company.timeTo) : "Nå"}
		</p>
	</div>

	<p>{company.description}</p>
</div>
