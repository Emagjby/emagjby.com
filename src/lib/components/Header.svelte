<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import { navItems, siteContent } from "$lib/content/site";
</script>

<header
	class="sticky top-0 z-20 border-b border-[rgba(152,128,227,0.1)] bg-[linear-gradient(180deg,rgba(8,7,12,0.72),rgba(8,7,12,0.38))] backdrop-blur-sm"
>
	<Container class="flex items-center justify-between py-4 sm:py-5">
		<a href="/" class="interactive-link text-lg font-semibold tracking-tight text-(--text-primary)">
			{siteContent.name}
		</a>

		<nav aria-label="Primary navigation">
			<ul class="flex items-center gap-6 text-sm sm:gap-8">
				{#each navItems as item (item.href)}
					<li>
						<a
							href={item.href}
							target={item.external ? "_blank" : undefined}
							rel={item.external ? "noreferrer" : undefined}
							class="interactive-link text-(--text-muted)"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</Container>
</header>
