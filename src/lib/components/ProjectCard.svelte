<script lang="ts">
	import type { Project } from "$lib/types/site";

	let { project } = $props<{ project: Project }>();
</script>

<article
	class="interactive-card flex h-full flex-col rounded-2xl border p-6 backdrop-blur-sm"
>
	<div class="flex items-start justify-between gap-4">
		<div>
			<h3 class="text-xl font-semibold tracking-tight">{project.name}</h3>

			{#if project.category}
				<p class="mt-2 text-sm text-(--text-secondary)">
					{project.category}
				</p>
			{/if}
		</div>
	</div>

	<p class="mt-4 text-sm leading-7 text-(--text-muted)">
		{project.description}
	</p>

	{#if project.href}
		<div class="mt-auto pt-6">
			<a
				href={project.href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`View project ${project.name}`}
				class="interactive-link interactive-link-directional text-sm font-medium"
			>
				<span>View project</span>
				<span aria-hidden="true" class="interactive-link-arrow">→</span>
			</a>
		</div>
	{/if}
</article>
