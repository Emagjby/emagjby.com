<script lang="ts">
	import Section from "$lib/components/Section.svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import { siteContent } from "$lib/content/site";
	import { projects } from "$lib/content/projects";
</script>

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
