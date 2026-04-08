<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import { navItems, siteContent } from '$lib/content/site';
</script>

<header class="sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur-md">
	<Container class="flex items-center justify-between py-5">
		<a href="/" class="text-lg font-semibold tracking-tight text-white">
			{siteContent.name}
		</a>

		<nav aria-label="Primary navigation">
			<ul class="flex items-center gap-6 text-sm text-white/65">
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							target={item.external ? '_blank' : undefined}
							rel={item.external ? 'noreferrer' : undefined}
							class="transition-colors hover:text-white"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</Container>
</header>
