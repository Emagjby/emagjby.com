<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import { siteContent } from "$lib/content/site";
</script>

<section class="relative overflow-hidden py-24 sm:py-32 lg:py-40">
	<div
		class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,var(--accent-glow),transparent_35%)]"
	></div>

	<Container>
		<div class="max-w-4xl">
			{#if siteContent.hero.eyebrow}
				<p
					class="text-sm font-medium uppercase tracking-[0.2em] text-(--text-secondary)"
				>
					{siteContent.hero.eyebrow}
				</p>
			{/if}

			<h1
				class="mt-4 text-5xl font-semibold tracking-tight text-(--text-primary) sm:text-7xl"
			>
				{siteContent.hero.heading}
			</h1>

			<p
				class="mt-6 max-w-2xl text-lg leading-8 text-(--text-muted) sm:text-xl"
			>
				{siteContent.hero.subheading}
			</p>

			{#if siteContent.hero.primaryCta || siteContent.hero.secondaryCta}
				<div
					class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
				>
					<a
						href={siteContent.hero.primaryCta.href}
						class="interactive-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-(--text-primary)"
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
							class="interactive-button-secondary inline-flex items-center justify-center rounded-full border border-(--border-default) bg-(--bg-elevated) px-6 py-3 text-sm font-medium text-(--text-primary) hover:bg-(--bg-surface)"
						>
							{siteContent.hero.secondaryCta.label}
						</a>
					{/if}
				</div>
			{/if}
		</div>
	</Container>
</section>
