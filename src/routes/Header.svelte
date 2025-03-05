<script>
	import { page } from "$app/stores";
	import ColorThemeButton from "$lib/components/ui/button/ColorThemeButton.svelte";
	import { cn } from "$lib/tailwindind";
	import { navRoutes } from "$lib/utils/navigation";

	let currentPath;
	$: currentPath = $page.url.pathname;
</script>

<header class="sticky top-0 z-10 flex h-20 w-full items-center justify-between bg-background px-4">
	<nav>
		<ul class="flex items-center gap-4 md:gap-8">
			{#each navRoutes as { href, text }}
				<li>
					<a
						class={cn(
							"hover:text-primary hover:underline",
							href === currentPath && "font-bold text-primary underline"
						)}
						{href}
						aria-current={href === currentPath ? "page" : undefined}
					>
						{text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<ColorThemeButton />
</header>
