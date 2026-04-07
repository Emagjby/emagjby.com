<script lang="ts">
	import type { Project } from "$lib/types/site";

	let { project } = $props<{ project: Project }>();
</script>

<article
	class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
>
	<div class="flex items-start justify-between gap-4">
		<div>
			<h3 class="text-xl font-semibold tracking-tight">{project.name}</h3>

			{#if project.category}
				<p class="mt-2 text-sm text-white/50">{project.category}</p>
			{/if}
		</div>
	</div>

	<p class="mt-4 text-sm leading-7 text-white/70">
		{project.description}
	</p>

	{#if project.href}
		<div class="mt-6">
			<a
				href={project.href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`View project ${project.name}`}
				class="text-sm font-medium text-white underline underline-offset-4 hover:text-white/80"
			>
				View project
			</a>
		</div>
	{/if}
</article>
