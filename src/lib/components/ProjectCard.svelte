<script lang="ts">
	import type { Project } from "$lib/types/site";

	let { project } = $props<{ project: Project }>();
</script>

<article
	class="flex h-full flex-col rounded-2xl border border-(--border-subtle) bg-(--bg-surface) p-6 backdrop-blur-sm"
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
				class="interactive-link text-sm font-medium text-(--text-primary) underline underline-offset-4"
			>
				View project →
			</a>
		</div>
	{/if}
</article>
