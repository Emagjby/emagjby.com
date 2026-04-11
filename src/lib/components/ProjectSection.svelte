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
	spaceBefore="var(--layout-section-space-tight)"
	spaceAfter="var(--layout-section-space-compact)"
	contentGap="var(--layout-section-gap-compact)"
>
	<div class="project-grid grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
		{#each projects as project (project.name)}
			<ProjectCard {project} />
		{/each}
	</div>

	<div
		class="labs-callout mt-[var(--layout-section-gap-compact)] rounded-[1.35rem] border p-5 text-sm text-(--text-muted) sm:p-6"
	>
		<p class="m-0">
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

<style>
	.project-grid {
		align-items: stretch;
	}

	.labs-callout {
		border-color: var(--border-subtle);
		background: rgba(16, 14, 22, 0.68);
	}

	@media (max-width: 639px) {
		.labs-callout {
			border-radius: 1.2rem;
		}
	}
</style>
