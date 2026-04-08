<script lang="ts">
	import Container from "$lib/components/Container.svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import Section from "$lib/components/Section.svelte";
	import { navItems, siteContent } from "$lib/content/site";
	import { projects } from "$lib/content/projects";
</script>

<svelte:head>
	<title>{siteContent.title}</title>
	<meta name="description" content={siteContent.description} />
</svelte:head>

<div class="min-h-screen">
	<header
		class="sticky top-0 z-10 border-b border-white/10 bg-black/70 backdrop-blur"
	>
		<Container class="flex items-center justify-between py-5">
			<a href="/" class="text-lg font-semibold tracking-tight"
				>{siteContent.name}</a
			>

			<nav class="flex items-center gap-6 text-sm text-white/70">
				{#each navItems as item}
					<a
						href={item.href}
						target={item.external ? "_blank" : undefined}
						rel={item.external ? "noopener noreferrer" : undefined}
						class="transition hover:text-white"
					>
						{item.label}
					</a>
				{/each}
			</nav>
		</Container>
	</header>

	<section class="py-24 sm:py-32">
		<Container>
			{#if siteContent.hero.eyebrow}
				<p
					class="text-sm font-medium uppercase tracking-[0.2em] text-white/50"
				>
					{siteContent.hero.eyebrow}
				</p>
			{/if}

			<h1
				class="mt-4 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl"
			>
				{siteContent.hero.heading}
			</h1>

			<p
				class="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl"
			>
				{siteContent.hero.subheading}
			</p>
		</Container>
	</section>

	<Section id="projects" title="Projects">
		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>

		<div
			class="mt-10 rounded-2xl border border-dashed border-white/10 p-6 text-sm text-white/60"
		>
			<p>
				{siteContent.labs.callout}
				<a
					href={siteContent.labs.href}
					target="_blank"
					rel="noopener noreferrer"
					class="ml-1 text-white underline underline-offset-4 hover:text-white/80"
				>
					Visit Labs
				</a>
			</p>
		</div>
	</Section>

	<Section id="about" title={siteContent.about.title}>
		<div class="max-w-3xl">
			<p class="text-base leading-8 text-white/70 sm:text-lg">
				{siteContent.about.body}
			</p>
		</div>
	</Section>

	<footer class="border-t border-white/10 py-8">
		<Container
			class="flex flex-col gap-3 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between"
		>
			<p>{siteContent.footer.blurb}</p>
			<a
				href="https://github.com/Emagjby"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-white"
			>
				GitHub
			</a>
		</Container>
	</footer>
</div>
