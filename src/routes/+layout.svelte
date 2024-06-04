<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="flex min-h-screen flex-col">
	<Header />

	<main
		class="mx-auto flex w-full max-w-2xl flex-1 flex-col flex-col gap-8 bg-background px-4 py-8"
	>
		<slot />
	</main>
</div>
