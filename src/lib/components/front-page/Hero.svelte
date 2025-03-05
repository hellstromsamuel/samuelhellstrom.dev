<script>
	import image from "$lib/assets/samuelhellstrom.webp";
</script>

<div class="flex flex-col-reverse items-center justify-center gap-8 md:flex-row">
	<div>
		<h1>
			<span>Hei </span>
			<span class="animate-wave inline-block">👋</span>
		</h1>
		<p>
			Velkommen til min personlige nettside. Mitt navn er <strong>Samuel Hellstrøm</strong> og jeg er
			utvikler / gründer / idrettsutøver.
		</p>
	</div>

	<img src={image} alt="Bilde av Samuel Hellstrøm" class="max-w-[350px] rounded-full" />
</div>

<style>
	@keyframes wave {
		0%,
		100% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(20deg);
		}
		50% {
			transform: rotate(-20deg);
		}
		75% {
			transform: rotate(20deg);
		}
	}

	.animate-wave {
		display: inline-block;
		animation: wave 1s ease-in-out 3;
		animation-fill-mode: forwards;
	}
</style>
