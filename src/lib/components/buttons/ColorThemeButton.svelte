<script lang="ts">
	import Sun from "lucide-svelte/icons/sun";
	import Moon from "lucide-svelte/icons/moon";

	import { toggleMode } from "mode-watcher";
	import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button on:click={toggleMode} variant="outline" class="gap-2 font-bold" size="sm">
	<span class="hidden md:block">Bytt fargetema</span>
	<Sun class="hidden h-[1.2rem] w-[1.2rem] text-yellow-200 dark:block" />
	<Moon class="block h-[1.2rem] w-[1.2rem] text-blue-900 dark:hidden" />
</Button>
