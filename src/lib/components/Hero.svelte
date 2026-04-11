<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import { siteContent } from "$lib/content/site";
</script>

<section
	class="hero-section relative overflow-hidden pt-0 pb-[var(--layout-hero-space-bottom)]"
>
	<Container>
		<div class="hero-block max-w-[var(--layout-hero-heading-width)]">
			{#if siteContent.hero.eyebrow}
				<p
					class="hero-eyebrow text-sm font-medium uppercase text-(--text-secondary)"
				>
					{siteContent.hero.eyebrow}
				</p>
			{/if}

			<h1 class="hero-heading text-(--text-primary)">
				{siteContent.hero.heading}
			</h1>

			<p class="hero-copy text-(--text-muted)">
				{siteContent.hero.subheading}
			</p>

			{#if siteContent.hero.primaryCta || siteContent.hero.secondaryCta}
				<div class="hero-actions">
					<a
						href={siteContent.hero.primaryCta.href}
						class="interactive-button flex min-h-12 w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-(--text-primary) md:inline-flex md:w-auto"
					>
						{siteContent.hero.primaryCta.label}
					</a>

					{#if siteContent.hero.secondaryCta}
						<a
							href={siteContent.hero.secondaryCta.href}
							target={siteContent.hero.secondaryCta.external
								? "_blank"
								: undefined}
							rel={siteContent.hero.secondaryCta.external
								? "noopener noreferrer"
								: undefined}
							class="interactive-button-secondary flex min-h-12 w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-(--text-primary) md:inline-flex md:w-auto"
						>
							{siteContent.hero.secondaryCta.label}
						</a>
					{/if}
				</div>
			{/if}
		</div>
	</Container>
</section>

<style>
	.hero-section {
		padding-top: clamp(2.15rem, 9vw, 4.5rem);
	}

	.hero-eyebrow {
		margin: 0;
		font-size: 0.72rem;
		letter-spacing: 0.2em;
	}

	.hero-heading {
		margin: 0.7rem 0 0;
		max-width: 9ch;
		font-size: clamp(2.35rem, 11vw, 4rem);
		font-weight: 600;
		line-height: 0.92;
		letter-spacing: -0.055em;
		text-wrap: balance;
	}

	.hero-block {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		min-height: clamp(18rem, 50vh, 27rem);
		justify-content: center;
	}

	.hero-copy {
		margin: 1rem 0 0;
		width: 100%;
		max-width: 31rem;
		font-size: 0.98rem;
		line-height: 1.62;
		text-wrap: pretty;
	}

	.hero-actions {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		width: 100%;
		gap: 0.75rem;
		margin-top: 1.4rem;
	}

	.hero-actions :global(a) {
		padding: 0.8rem 1.2rem;
		font-size: 0.92rem;
	}

	@media (min-width: 480px) {
		.hero-actions {
			max-width: none;
		}

		.hero-actions :global(a) {
			width: auto;
			min-width: 10.75rem;
		}
	}

	@media (min-width: 640px) {
		.hero-section {
			padding-top: clamp(4.5rem, 7vw, 7rem);
		}

		.hero-eyebrow {
			font-size: 0.75rem;
		}

		.hero-heading {
			margin-top: 0.95rem;
			max-width: 10.5ch;
			font-size: clamp(3.75rem, 8.2vw, 6.9rem);
		}

		.hero-block {
			min-height: clamp(28rem, 64vh, 40rem);
		}

		.hero-copy {
			margin-top: 1.7rem;
			max-width: var(--layout-hero-copy-width);
			font-size: clamp(1.05rem, 1.3vw, 1.24rem);
			line-height: 1.75;
		}

		.hero-actions {
			margin-top: 2rem;
		}
	}

	@media (min-width: 768px) {
		.hero-actions {
			flex-direction: row;
			flex-wrap: wrap;
			align-items: center;
			width: auto;
			gap: 1rem;
		}

		.hero-actions :global(a) {
			padding: 0.75rem 1.5rem;
			font-size: 0.875rem;
		}
	}
</style>
