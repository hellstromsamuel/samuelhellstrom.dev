<script>
	import { page } from "$app/stores";
	import ColorThemeButton from "$lib/components/buttons/ColorThemeButton.svelte";
	import { cn } from "$lib/utils";
	import { navRoutes } from "$lib/utils/navigation";

	let currentPath;
	$: currentPath = $page.url.pathname;
</script>

<header
	class="bg-background sticky top-0 z-10 flex h-20 w-full items-center justify-between px-4 md:px-8"
>
	<nav>
		<ul class="flex items-center gap-4 md:gap-8">
			{#each navRoutes as { href, text }}
				<li>
					<a
						class={cn(
							"hover:text-primary text-sm hover:underline md:text-xl",
							href === currentPath && "text-primary font-bold underline"
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
