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
		margin-top: -1.2rem;
		padding-top: 1.4rem;
		padding-bottom: 1.7rem;
		border-top: 1px solid rgba(158, 136, 227, 0.22);
		background: linear-gradient(
			180deg,
			rgba(12, 10, 18, 0.62) 0%,
			rgba(8, 7, 12, 0.32) 46%,
			rgba(8, 7, 12, 0.12) 100%
		);
	}

	.site-footer::before {
		content: "";
		position: absolute;
		top: -1px;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(
			90deg,
			rgba(139, 92, 246, 0),
			rgba(177, 151, 255, 0.3),
			rgba(236, 72, 153, 0.14),
			rgba(139, 92, 246, 0)
		);
		pointer-events: none;
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
		color: rgba(248, 245, 255, 0.94);
	}

	.site-footer-blurb {
		margin: 0;
		font-size: 0.8rem;
		line-height: 1.45;
		letter-spacing: 0.014em;
		color: rgba(192, 183, 223, 0.76);
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
		padding: 0.15rem 0;
		font-size: 0.84rem;
		line-height: 1.35;
		letter-spacing: 0.012em;
	}

	@media (min-width: 640px) {
		.site-footer {
			margin-top: -1.75rem;
			padding-top: 1.55rem;
			padding-bottom: 1.95rem;
		}

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

	@media (min-width: 1024px) {
		.site-footer {
			margin-top: -2.2rem;
			padding-top: 1.7rem;
			padding-bottom: 2.1rem;
		}
	}
</style>
