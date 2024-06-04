<script>
	import { page } from '$app/stores';
	import ColorThemeButton from '$lib/components/buttons/ColorThemeButton.svelte';
	import { cn } from '$lib/utils';
	import { navRoutes } from '$lib/utils/navigation';

	let currentPath;
	$: currentPath = $page.url.pathname;
</script>

<header
	class="sticky top-0 z-10 flex h-20 w-full items-center justify-between border-b bg-background px-6"
>
	<nav>
		<ul class="flex items-center gap-4 md:gap-8">
			{#each navRoutes as { href, text }}
				<li>
					<a
						class={cn(
							'hover:text-primary hover:no-underline md:text-xl',
							href === currentPath && 'text-primary'
						)}
						{href}
						aria-current={href === currentPath ? 'page' : undefined}
					>
						{text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<ColorThemeButton />
</header>
