<script lang="ts">
	import { cn } from "$lib/utils/tailwind";

	let className = "";
	export { className as class };
</script>

<h2 class={cn("font-bold text-xl", className)}>
	<slot />
</h2>
