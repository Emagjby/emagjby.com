<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import { navItems, siteContent } from "$lib/content/site";
</script>

<header class="site-header-shell sticky top-0 z-20">
	<Container
		class="site-header-inner flex items-center justify-between gap-5 sm:gap-7"
	>
		<a
			href="/"
			aria-label={`${siteContent.name} home`}
			class="interactive-link interactive-brand-link site-brand-lockup"
		>
			<span class="site-brand-mark-shell" aria-hidden="true">
				<img
					src={siteContent.brand.logo.src}
					alt=""
					width={siteContent.brand.logo.width}
					height={siteContent.brand.logo.height}
					decoding="async"
					class="site-brand-mark"
				/>
			</span>
			<span class="site-brand-wordmark">{siteContent.name}</span>
		</a>

		<nav aria-label="Primary navigation" class="site-header-nav">
			<ul class="site-nav-list">
				{#each navItems as item (item.href)}
					<li>
						<a
							href={item.href}
							target={item.external ? "_blank" : undefined}
							rel={item.external
								? "noopener noreferrer"
								: undefined}
							class="interactive-link interactive-nav-link site-nav-link"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</Container>
</header>

<style>
	:global(.site-header-inner) {
		min-height: 4rem;
		padding-top: 0.85rem;
		padding-bottom: 0.85rem;
	}

	.site-brand-lockup {
		display: inline-flex;
		align-items: center;
		gap: 0.72rem;
		padding: 0.2rem 0.1rem;
		min-width: 0;
	}

	.site-brand-mark-shell {
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		width: 1.32rem;
		height: 1.32rem;
	}

	.site-brand-mark {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
		opacity: 0.94;
		transition:
			opacity var(--motion-duration-fast) var(--motion-ease-standard),
			transform var(--motion-duration-standard)
				var(--motion-ease-standard);
	}

	.site-brand-wordmark {
		display: inline-block;
		font-size: 0.97rem;
		font-weight: 600;
		letter-spacing: -0.028em;
		line-height: 1;
		white-space: nowrap;
	}

	.site-header-nav {
		flex-shrink: 0;
	}

	.site-nav-list {
		display: flex;
		align-items: center;
		gap: 1.15rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.site-nav-link {
		display: inline-flex;
		align-items: center;
		padding: 0.2rem 0.1rem;
		font-size: 0.9rem;
		font-weight: 500;
		letter-spacing: 0.012em;
	}

	.site-brand-lockup:focus-visible,
	.site-nav-link:focus-visible {
		outline: none;
		box-shadow: var(--focus-ring);
		border-radius: 999px;
	}

	.site-brand-lockup:focus-visible .site-brand-mark {
		opacity: 1;
	}

	@media (min-width: 640px) {
		:global(.site-header-inner) {
			min-height: 4.35rem;
			padding-top: 0.95rem;
			padding-bottom: 0.95rem;
		}

		.site-brand-lockup {
			gap: 0.8rem;
		}

		.site-brand-mark-shell {
			width: 2.46rem;
			height: 2.46rem;
		}

		.site-brand-wordmark {
			font-size: 1.02rem;
		}

		.site-nav-list {
			gap: 1.6rem;
		}
	}

	@media (hover: hover) {
		.site-brand-lockup:hover .site-brand-mark {
			opacity: 1;
			transform: translate3d(0, -1px, 0);
		}
	}
</style>
