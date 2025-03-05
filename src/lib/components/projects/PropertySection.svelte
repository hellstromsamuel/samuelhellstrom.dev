<script>
	import PropertyHeading from "./PropertyHeading.svelte";
	export let heading;
</script>

<div>
	<PropertyHeading>{heading}</PropertyHeading>
	<div class="flex flex-col gap-2">
		<slot />
	</div>
</div>
