<script lang="ts">
	import { fly, fade } from "svelte/transition";
	import { Menu, X } from "lucide-svelte";
	import Container from "$lib/components/Container.svelte";
	import { navItems, siteContent } from "$lib/content/site";

	let mobileNavOpen = $state(false);

	function closeMobileNav() {
		mobileNavOpen = false;
	}

	function toggleMobileNav() {
		mobileNavOpen = !mobileNavOpen;
	}

	function handleWindowKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			closeMobileNav();
		}
	}
</script>

<svelte:window onkeydown={handleWindowKeydown} />

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

		<nav aria-label="Primary navigation" class="site-header-nav site-header-nav-desktop">
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

		<button
			type="button"
			class="site-nav-toggle"
			aria-expanded={mobileNavOpen}
			aria-controls="site-mobile-nav"
			aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
			onclick={toggleMobileNav}
		>
			{#if mobileNavOpen}
				<X class="site-nav-toggle-icon" aria-hidden="true" strokeWidth={1.85} />
			{:else}
				<Menu class="site-nav-toggle-icon" aria-hidden="true" strokeWidth={1.85} />
			{/if}
		</button>
	</Container>

	{#if mobileNavOpen}
		<div class="site-mobile-nav-layer sm:hidden">
			<button
				type="button"
				class="site-mobile-nav-backdrop"
				aria-label="Close navigation menu"
				onclick={closeMobileNav}
				in:fade={{ duration: 160 }}
				out:fade={{ duration: 140 }}
			></button>

			<Container class="site-mobile-nav-wrap">
				<nav
					id="site-mobile-nav"
					aria-label="Primary navigation"
					class="site-mobile-nav-panel"
					in:fly={{ y: -8, duration: 180 }}
					out:fly={{ y: -6, duration: 140 }}
				>
					<ul class="site-mobile-nav-list">
						{#each navItems as item (item.href)}
							<li>
								<a
									href={item.href}
									target={item.external ? "_blank" : undefined}
									rel={item.external
										? "noopener noreferrer"
										: undefined}
									class="interactive-link site-mobile-nav-link"
									onclick={closeMobileNav}
								>
									{item.label}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</Container>
		</div>
	{/if}
</header>

<style>
	:global(.site-header-inner) {
		position: relative;
		z-index: 2;
		min-height: 3.5rem;
		padding-top: 0.65rem;
		padding-bottom: 0.65rem;
	}

	.site-brand-lockup {
		display: inline-flex;
		align-items: center;
		gap: 0.58rem;
		padding: 0.2rem 0.1rem;
		min-width: 0;
	}

	.site-brand-mark-shell {
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		width: 1.15rem;
		height: 1.15rem;
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
		font-size: 0.92rem;
		font-weight: 600;
		letter-spacing: -0.028em;
		line-height: 1;
		white-space: nowrap;
	}

	.site-header-nav {
		flex-shrink: 0;
		min-width: 0;
	}

	.site-header-nav-desktop {
		display: none;
	}

	.site-nav-list {
		display: flex;
		align-items: center;
		gap: 0.78rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.site-nav-link {
		display: inline-flex;
		align-items: center;
		padding: 0.22rem 0.08rem;
		font-size: 0.83rem;
		font-weight: 500;
		letter-spacing: 0.006em;
	}

	.site-nav-toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.75rem;
		height: 2.75rem;
		padding: 0;
		border: 1px solid var(--border-subtle);
		border-radius: 999px;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)),
			rgba(14, 12, 20, 0.82);
		color: var(--text-primary);
		box-shadow: 0 12px 24px -22px rgba(2, 1, 6, 0.98);
	}

	:global(.site-nav-toggle-icon) {
		width: 1rem;
		height: 1rem;
	}

	.site-mobile-nav-layer {
		position: fixed;
		inset: 0;
		z-index: 1;
	}

	.site-mobile-nav-backdrop {
		position: absolute;
		inset: 0;
		border: 0;
		background: rgba(6, 5, 9, 0.36);
	}

	:global(.site-mobile-nav-wrap) {
		position: relative;
		padding-top: calc(var(--layout-header-height) + 0.35rem);
	}

	.site-mobile-nav-panel {
		position: relative;
		margin-left: auto;
		width: min(100%, 18rem);
		border: 1px solid var(--border-default);
		border-radius: 1.15rem;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.035), rgba(255, 255, 255, 0)),
			rgba(14, 12, 20, 0.94);
		box-shadow: 0 24px 54px -30px rgba(2, 1, 6, 0.98);
		overflow: hidden;
	}

	.site-mobile-nav-list {
		display: grid;
		gap: 0.15rem;
		margin: 0;
		padding: 0.45rem;
		list-style: none;
	}

	.site-mobile-nav-link {
		display: flex;
		align-items: center;
		min-height: 2.9rem;
		padding: 0.7rem 0.85rem;
		border-radius: 0.85rem;
		color: var(--text-secondary);
		font-size: 0.94rem;
		font-weight: 500;
		letter-spacing: 0.005em;
	}

	@media (max-width: 399px) {
		:global(.site-header-inner) {
			gap: 0.75rem;
		}

		.site-brand-wordmark {
			display: none;
		}

		.site-mobile-nav-panel {
			width: 100%;
		}
	}

	.site-brand-lockup:focus-visible,
	.site-nav-link:focus-visible,
	.site-nav-toggle:focus-visible,
	.site-mobile-nav-link:focus-visible {
		outline: none;
		box-shadow: var(--focus-ring);
	}

	.site-brand-lockup:focus-visible,
	.site-nav-link:focus-visible,
	.site-nav-toggle:focus-visible {
		border-radius: 999px;
	}

	.site-mobile-nav-link:focus-visible {
		border-radius: 0.85rem;
	}

	.site-brand-lockup:focus-visible .site-brand-mark {
		opacity: 1;
	}

	@media (min-width: 640px) {
		.site-header-nav-desktop {
			display: block;
		}

		.site-nav-toggle,
		.site-mobile-nav-layer {
			display: none;
		}

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

		.site-nav-link {
			padding: 0.24rem 0.1rem;
			font-size: 0.9rem;
			letter-spacing: 0.012em;
		}
	}

	@media (hover: hover) {
		.site-brand-lockup:hover .site-brand-mark {
			opacity: 1;
			transform: translate3d(0, -1px, 0);
		}

		.site-nav-toggle:hover {
			border-color: var(--border-default);
			background:
				linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0)),
				rgba(18, 15, 25, 0.9);
		}

		.site-mobile-nav-link:hover {
			color: var(--text-accent);
			background: rgba(255, 255, 255, 0.035);
		}
	}
</style>
