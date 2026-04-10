<script lang="ts">
	import Section from "$lib/components/Section.svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import { siteContent } from "$lib/content/site";
	import { projects } from "$lib/content/projects";
</script>

<Section
	id="projects"
	size="wide"
	title="Projects"
	description="A selection of core Emagjby projects and public work."
>
	<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
		{#each projects as project (project.name)}
			<ProjectCard {project} />
		{/each}
	</div>

	<div
		class="mt-[var(--layout-section-gap)] rounded-2xl border border-dashed border-(--border-default) bg-(--bg-elevated) p-6 text-sm text-(--text-muted)"
	>
		<p>
			{siteContent.labs.callout}
			<a
				href={siteContent.labs.href}
				target="_blank"
				rel="noopener noreferrer"
				class="interactive-link interactive-link-inline interactive-link-accent ml-1 font-medium"
			>
				Visit Labs
			</a>
		</p>
	</div>
</Section>
