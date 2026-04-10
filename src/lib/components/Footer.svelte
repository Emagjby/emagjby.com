<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import { siteContent } from "$lib/content/site";
</script>

<footer class="border-t border-(--border-subtle) py-[var(--layout-footer-space)]">
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
							class="interactive-link interactive-footer-link"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</Container>
</footer>
