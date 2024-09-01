<script>
	import { ArrowLeft } from "lucide-svelte";

	export let href;
	export let label = "Tilbake";
</script>

<a {href} class="flex w-max gap-4 font-semibold underline hover:no-underline">
	<ArrowLeft class="h-6 w-6" />
	{label}
</a>
