<script lang="ts">
	import Sun from "lucide-svelte/icons/sun";
	import Moon from "lucide-svelte/icons/moon";

	import { toggleMode } from "mode-watcher";
	import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button on:click={toggleMode} variant="outline" class="h-auto gap-4 px-3 h-12 text-lg">
	<p class="hidden text-lg font-bold md:block">Bytt fargetema</p>
	<Sun class="hidden h-5 w-5 text-yellow-200 dark:block" />
	<Moon class="block h-5 w-5 text-blue-900 dark:hidden" />
</Button>
