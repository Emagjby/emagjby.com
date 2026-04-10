<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import { siteContent } from "$lib/content/site";
</script>

<section class="relative overflow-hidden py-20 sm:py-28 lg:py-36">
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
					class="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center"
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
							class="interactive-button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-(--text-primary)"
						>
							{siteContent.hero.secondaryCta.label}
						</a>
					{/if}
				</div>
			{/if}
		</div>
	</Container>
</section>
