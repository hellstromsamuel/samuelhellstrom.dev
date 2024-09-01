<script lang="ts" type="module">
	import type { Project } from "$lib/types/cms/Project";
	import PropertySection from "./PropertySection.svelte";
	import ExternalLink from "../ui/link/ExternalLink.svelte";
	import ProjectKeywords from "./ProjectKeywords.svelte";

	export let project: Project;
</script>

<div class="flex flex-col gap-6">
	<h1>
		{project.role}
	</h1>

	<PropertySection heading="Prosjekt">{project.name}</PropertySection>

	<PropertySection heading="Nøkkelord">
		<ProjectKeywords {project} />
	</PropertySection>

	<PropertySection heading="Bilder">
		{#if project.image}
			<img src={project.image.asset.url} alt={project.name} class="w-full rounded-xl border" />
		{/if}
	</PropertySection>

	<PropertySection heading="Beskrivelse">
		<p class="whitespace-pre-wrap">
			{project.description}
		</p>
	</PropertySection>

	{#if project.company}
		<PropertySection heading="Selskap">
			<div class="flex flex-col gap-8 md:flex-row md:items-center">
				{#if project.company.logo}
					<img
						src={project.company.logo.asset.url}
						alt={project.company.name}
						class="size-48 rounded-xl border object-contain p-2"
					/>
				{:else}
					<div class="size-48 rounded-xl border p-2" />
				{/if}

				<div class="flex flex-col">
					<p>
						{project.company.name}
					</p>
					<ExternalLink href={project.company.website}>{project.company.website}</ExternalLink>
					<p class="mt-4">{project.company.description}</p>
				</div>
			</div>
		</PropertySection>
	{/if}
</div>
