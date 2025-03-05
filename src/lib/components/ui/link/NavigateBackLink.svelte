<script>
	import { ArrowLeft } from "lucide-svelte";

	export let href;
	export let label = "Tilbake";
</script>

<a {href} class="flex w-max items-center gap-4 font-semibold hover:underline">
	<ArrowLeft class="h-5 w-5" />
	{label}
</a>
