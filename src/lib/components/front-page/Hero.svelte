<script>
	import image from "$lib/assets/samuelhellstrom.webp";
	import ExternalLink from "../ui/link/ExternalLink.svelte";
	import H1 from "../ui/text/H1.svelte";
</script>

<div class="flex flex-col-reverse items-center justify-center gap-8 lg:flex-row">
	<div>				
		<H1>
			<span>Hei </span>
			<span class="animate-wave inline-block">👋</span>
		</H1>
		<p class="mt-2">
			Velkommen til min personlige nettside. Mitt navn er <strong>Samuel Hellstrøm</strong> og jeg er
			utvikler / gründer / idrettsutøver.
		</p>

		<ul class="mt-4 list-disc space-y-2 pl-8">
			<li>
				Epost: <ExternalLink href="mailto:hellstromsamuel@gmail.com"
					>hellstromsamuel@gmail.com</ExternalLink
				>
			</li>
			<li>
				Lenker:
				<ExternalLink href="https://www.linkedin.com/in/samuel-hellstrom/">LinkedIn</ExternalLink>
				<ExternalLink href="https://github.com/hellstromsamuel">GitHub</ExternalLink>
			</li>
		</ul>
	</div>

	<img src={image} alt="Bilde av Samuel Hellstrøm" class="w-full max-w-[350px] rounded-full" />
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
