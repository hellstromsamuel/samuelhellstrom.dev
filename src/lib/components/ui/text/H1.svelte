<script lang="ts">
	import { cn } from "$lib/utils/tailwind";

	let className = "";
	export { className as class };
</script>

<h1 class={cn("text-2xl font-bold md:text-3xl", className)}>
	<slot />
</h1>
