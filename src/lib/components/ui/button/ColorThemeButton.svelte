<script lang="ts">
	import Sun from "lucide-svelte/icons/sun";
	import Moon from "lucide-svelte/icons/moon";

	import { toggleMode } from "mode-watcher";
	import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button on:click={toggleMode} variant="outline" class="h-auto gap-4 p-3" size="lg">
	<p class="hidden text-xl font-bold md:block">Bytt fargetema</p>
	<Sun class="hidden h-6 w-6 text-yellow-200 dark:block" />
	<Moon class="block h-6 w-6 text-blue-900 dark:hidden" />
</Button>
