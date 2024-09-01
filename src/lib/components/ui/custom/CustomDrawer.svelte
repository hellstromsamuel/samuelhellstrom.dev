<script lang="ts">
	import * as Drawer from "$lib/components/ui/drawer";
	import Button from "../button/button.svelte";

	export let open;
	export let buttonLabel;
	export let title;
	export let description = "";
	export let buttonClass = "";
	export let closeLabel = "Lukk";
</script>

<Drawer.Root {open}>
	<Drawer.Trigger>
		<Button variant="outline" class={buttonClass}>
			{buttonLabel}
		</Button></Drawer.Trigger
	>
	<Drawer.Content>
		<Drawer.Header>
			<Drawer.Title>{title}</Drawer.Title>
			<Drawer.Description>{description}</Drawer.Description>
		</Drawer.Header>

		<div class="mx-auto max-w-3xl px-4">
			<slot />
		</div>

		<Drawer.Footer class="py-8">
			<Drawer.Close><Button variant="secondary">{closeLabel}</Button></Drawer.Close>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>
