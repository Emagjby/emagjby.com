<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import { siteContent } from "$lib/content/site";
</script>

<footer class="border-t border-(--border-subtle) py-8 sm:py-10">
	<Container
		class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
	>
		<div class="space-y-1">
			<p class="text-sm font-medium text-(--text-primary)">
				{siteContent.name} &copy;
			</p>
		</div>

		<nav aria-label="Footer links">
			<ul class="flex flex-wrap items-center gap-5 text-sm">
				{#each siteContent.footer.links as link (link.href)}
					<li>
						<a
							href={link.href}
							target={link.external ? "_blank" : undefined}
							rel={link.external ? "noreferrer" : undefined}
							class="interactive-link text-(--text-muted)"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</Container>
</footer>
