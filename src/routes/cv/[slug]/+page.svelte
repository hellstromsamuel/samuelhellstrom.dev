<script>
	import ProjectPage from "$lib/components/projects/ProjectPage.svelte";
	import ErrorMessage from "$lib/components/ui/error/ErrorMessage.svelte";
	import NavigateBackLink from "$lib/components/ui/link/NavigateBackLink.svelte";

	export let data;
	let project = data.project;
</script>

<NavigateBackLink href="/prosjekter" label="Prosjekter" />
{#if !project}
	<ErrorMessage />
{:else}
	<ProjectPage {project} />
{/if}
