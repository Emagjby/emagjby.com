<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import { siteContent } from "$lib/content/site";
</script>

<footer class="border-t border-white/10 py-6 sm:py-10">
	<Container
		class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
	>
		<div class="space-y-1">
			<p class="text-sm font-medium text-white">{siteContent.name}</p>
			<p class="text-sm text-white/50">{siteContent.footer.blurb}</p>
		</div>

		<nav aria-label="Footer links">
			<ul class="flex flex-wrap items-center gap-5 text-sm text-white/60">
				{#each siteContent.footer.links as link}
					<li>
						<a
							href={link.href}
							target={link.external ? "_blank" : undefined}
							rel={link.external ? "noreferrer" : undefined}
							class="transition-colors hover:text-white"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</Container>
</footer>
