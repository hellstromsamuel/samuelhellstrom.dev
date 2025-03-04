<script>
	import { onMount } from "svelte";
	import image from "$lib/assets/samuelhellstrom.webp";

	let waveClass = "opacity-0 transform translate-y-4";
	let isInView = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isInView) {
						isInView = true;
						waveClass = "opacity-100 transform translate-y-0 transition-all duration-700 ease-out";
					}
				});
			},
			{ threshold: 0.1 } // Trigger when at least 10% of the component is visible
		);

		const section = document.querySelector("section");
		if (section) {
			observer.observe(section);
		}

		return () => {
			if (section) {
				observer.unobserve(section);
			}
		};
	});
</script>

<div class="flex flex-col-reverse items-center justify-center gap-8 md:flex-row">
	<div>
		<h1 class={`${waveClass} inline-block`}>
			<span>Hei </span>
			<span class="animate-wave inline-block">👋</span>
		</h1>
		<p class={`${waveClass} delay-200`}>
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
		animation: wave 1s ease-in-out 2;
		animation-fill-mode: forwards;
	}
</style>
