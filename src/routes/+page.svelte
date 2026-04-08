<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import Section from "$lib/components/Section.svelte";
	import Container from "$lib/components/Container.svelte";
	import { siteContent } from "$lib/content/site";
	import { projects } from "$lib/content/projects";
	import Hero from "$lib/components/Hero.svelte";
</script>

<svelte:head>
	<title>{siteContent.title}</title>
	<meta name="description" content={siteContent.description} />
</svelte:head>

<div class="min-h-screen">
	<Header />
	<Hero />

	<Section
		id="projects"
		title="Projects"
		description="A selection of core Emagjby projects and public work."
	>
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

	<Section
		id="about"
		title={siteContent.about.title}
		description={siteContent.about.body}
	/>

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
