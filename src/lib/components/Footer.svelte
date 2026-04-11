<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import { siteContent } from "$lib/content/site";
</script>

<footer class="site-footer">
	<Container class="site-footer-inner">
		<div class="site-footer-identity">
			<p class="site-footer-title">&copy; {siteContent.name}</p>
			<p class="site-footer-blurb">{siteContent.footer.blurb}</p>
		</div>

		<nav aria-label="Footer links" class="site-footer-nav">
			<ul class="site-footer-links">
				{#each siteContent.footer.links as link (link.href)}
					<li>
						<a
							href={link.href}
							target={link.external ? "_blank" : undefined}
							rel={link.external ? "noreferrer" : undefined}
							class="interactive-link interactive-footer-link site-footer-link"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</Container>
</footer>

<style>
	.site-footer {
		position: relative;
		margin-top: calc(var(--layout-footer-overlap) * -1);
		padding-top: var(--layout-footer-space);
		padding-bottom: max(1.5rem, calc(var(--layout-footer-space) - 0.1rem));
		border-top: 1px solid var(--border-subtle);
		background: linear-gradient(
			180deg,
			rgba(12, 10, 18, 0.62) 0%,
			rgba(8, 7, 12, 0.32) 46%,
			rgba(8, 7, 12, 0.12) 100%
		);
	}

	:global(.site-footer-inner) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.95rem;
	}

	.site-footer-identity {
		display: grid;
		gap: 0.24rem;
	}

	.site-footer-title {
		margin: 0;
		font-size: 0.88rem;
		font-weight: 560;
		letter-spacing: 0.012em;
		color: var(--text-primary);
	}

	.site-footer-blurb {
		margin: 0;
		font-size: 0.8rem;
		line-height: 1.5;
		letter-spacing: 0.014em;
		color: var(--text-muted);
	}

	.site-footer-nav {
		width: 100%;
	}

	.site-footer-links {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.7rem 1.15rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.site-footer-link {
		display: inline-flex;
		align-items: center;
		min-height: 2.5rem;
		padding: 0.2rem 0;
		font-size: 0.84rem;
		line-height: 1.35;
		letter-spacing: 0.012em;
	}

	@media (max-width: 639px) {
		.site-footer {
			margin-top: 0;
		}

		.site-footer-links {
			gap: 0.35rem 1rem;
		}
	}

	.site-footer-link:focus-visible {
		outline: none;
		box-shadow: var(--focus-ring);
		border-radius: 999px;
	}

	@media (min-width: 640px) {
		:global(.site-footer-inner) {
			flex-direction: row;
			align-items: flex-end;
			justify-content: space-between;
			gap: 1.4rem;
		}

		.site-footer-nav {
			width: auto;
		}

		.site-footer-links {
			justify-content: flex-end;
			gap: 0.8rem 1.3rem;
		}
	}

</style>
