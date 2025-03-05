<script>
	import { page } from "$app/stores";
	import ColorThemeButton from "$lib/components/ui/button/ColorThemeButton.svelte";
	import { cn } from "$lib/utils/tailwind";
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
							"rounded px-2 py-1 font-bold hover:underline ",
							href === currentPath && "bg-gray-100 text-primary dark:bg-gray-800"
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
