<script>
	export let href = '';
	export let target = '_blank';
</script>

<a {href} {target} class="underline font-semibold text-primary hover:no-underline"><slot /></a>
