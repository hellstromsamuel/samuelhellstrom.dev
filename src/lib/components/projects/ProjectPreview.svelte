<script lang="ts" type="module">
	import type { Project } from "$lib/types/sanity/Project";
	import ProjectKeywords from "./ProjectKeywords.svelte";

	export let project: Project;
</script>

<div class="relative flex flex-col gap-6">
	<div class="flex items-center gap-4 md:mr-12 md:gap-6">
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

			<ProjectKeywords {project} keywordClass="text-xs" />
		</div>
	</div>
</div>
