<script lang="ts" type="module">
	import type { Project } from "$lib/types/sanity/Project";
	import { cn } from "$lib/utils";
	import { ArrowRight } from "lucide-svelte";
	import ProjectKeywords from "./ProjectKeywords.svelte";

	export let project: Project;

	let hover = false;
</script>

<a
	href="/prosjekter/{project.slug.current}"
	class="relative flex flex-col gap-6 rounded-xl p-0 sm:border sm:p-6"
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
>
	<ArrowRight
		class={cn(
			"absolute hidden duration-200 md:right-6 md:top-6 md:block",
			hover && "rotate-[-45deg]"
		)}
	/>

	<div class="flex items-center gap-4 md:mr-12 md:gap-6">
		{#if project.image}
			<img
				src={project.image.asset.url}
				alt={project.name}
				class="size-20 rounded-xl border object-contain md:size-24"
			/>
		{:else}
			<div class="size-20 p-1 md:size-24" />
		{/if}
		<div>
			<h2 class="text-base md:text-2xl">
				{project.role}
			</h2>
			<p class="mb-2 text-sm md:text-base">
				{#if project.company}
					{`${project.company.name}: `}
				{/if}
				{project.name}
			</p>

			<ProjectKeywords {project} keywordClass="text-xs md:text-base" limit={2} />
		</div>
	</div>
</a>
