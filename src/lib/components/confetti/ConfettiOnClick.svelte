<script lang="ts">
	import { Confetti } from 'svelte-confetti';

	const duration = 1500;

	let things: {
		x: number;
		y: number;
	}[] = [];
	let timeout: any;

	async function moveConfetti(event: any) {
		const { target, clientX, clientY } = event;

		const elementY = target.getBoundingClientRect().top;
		const elementX = target.getBoundingClientRect().left;

		const x = clientX - elementX;
		const y = clientY - elementY;

		things = [...things, { x, y }];

		clearTimeout(timeout);

		timeout = setTimeout(() => (things = []), duration);
	}
</script>

<button class="box" on:click={moveConfetti}>
	<slot />

	{#each things as thing}
		<div class="mover" style="left: {thing.x}px; top: {thing.y}px">
			<Confetti
				x={[-1, 1]}
				size={50}
				amount={50}
				colorArray={[
					'url(https://icons.iconarchive.com/icons/designbolts/free-valentine-heart/256/Heart-icon.png)'
				]}
				{duration}
			/>
		</div>
	{/each}
</button>

<style>
	.box {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: 100%;
		user-select: none;
	}

	.mover {
		position: absolute;
	}
</style>
