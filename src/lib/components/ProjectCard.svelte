<script lang="ts">
	import type { Project } from "$lib/types/site";

	let { project } = $props<{ project: Project }>();
</script>

<article
	class="project-card interactive-card flex flex-col self-start rounded-[1.35rem] border p-5 sm:p-6"
>
	<div class="project-card-body flex flex-col">
		<div class="project-card-header">
			{#if project.category}
				<p class="project-card-category">
					{project.category}
				</p>
			{/if}

			<h3 class="project-card-title">{project.name}</h3>
		</div>

		<p class="project-card-description text-sm">
			{project.description}
		</p>

		{#if project.href}
			<div class="project-card-footer">
				<a
					href={project.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`View project ${project.name}`}
					class="project-card-link interactive-link interactive-link-directional text-sm font-medium"
				>
					<span class="project-card-link-label">View project</span>
					<span aria-hidden="true" class="project-card-link-arrow interactive-link-arrow">→</span>
				</a>
			</div>
		{/if}
	</div>
</article>

<style>
	.project-card {
		position: relative;
		isolation: isolate;
		align-self: start;
		overflow: hidden;
		border-color: var(--border-subtle);
		background:
			radial-gradient(
				circle at 86% -14%,
				rgba(236, 72, 153, 0.12),
				transparent 34%
			),
			radial-gradient(
				circle at 0% 0%,
				rgba(139, 92, 246, 0.1),
				transparent 30%
			),
			linear-gradient(
				180deg,
				rgba(255, 255, 255, 0.032) 0%,
				rgba(255, 255, 255, 0.012) 28%,
				rgba(255, 255, 255, 0) 100%
			),
			var(--surface-card-current-fill);
		box-shadow:
			0 18px 34px -28px rgba(2, 1, 6, 0.96),
			inset 0 1px 0 rgba(255, 255, 255, 0.03);
	}

	.project-card::before,
	.project-card::after {
		content: "";
		position: absolute;
		pointer-events: none;
	}

	.project-card::before {
		inset: 0;
		border-radius: inherit;
		border: 1px solid rgba(255, 255, 255, 0.025);
	}

	.project-card::after {
		right: -1.45rem;
		bottom: -2.3rem;
		width: 8.75rem;
		aspect-ratio: 1;
		border-radius: 999px;
		background: radial-gradient(
			circle,
			rgba(139, 92, 246, 0.22) 0%,
			rgba(236, 72, 153, 0.11) 34%,
			transparent 74%
		);
		opacity: 0.13;
		transform: translate3d(0, 0, 0);
		transition:
			opacity var(--motion-duration-standard) var(--motion-ease-standard),
			transform var(--motion-duration-emphasis) var(--motion-ease-standard);
	}

	.project-card-body {
		position: relative;
		z-index: 1;
	}

	.project-card-header {
		display: grid;
		gap: 0.38rem;
	}

	.project-card-category {
		margin: 0;
		color: var(--text-secondary);
		opacity: 0.7;
		font-size: 0.68rem;
		font-weight: 500;
		letter-spacing: 0.11em;
		text-transform: uppercase;
		transition:
			color var(--motion-duration-fast) var(--motion-ease-standard),
			opacity var(--motion-duration-fast) var(--motion-ease-standard);
	}

	.project-card-title {
		margin: 0;
		color: var(--text-primary);
		font-size: clamp(1.14rem, 1.02rem + 0.38vw, 1.3rem);
		font-weight: 600;
		letter-spacing: -0.025em;
		line-height: 1.1;
	}

	.project-card-description {
		margin: 0.9rem 0 0;
		color: var(--text-muted);
		line-height: 1.6;
	}

	.project-card-footer {
		margin-top: 1.3rem;
		padding-top: 0.05rem;
		display: flex;
		align-items: center;
		border-top: 0;
	}

	.project-card-link {
		width: auto;
		justify-content: flex-start;
		color: var(--text-accent);
		gap: 0.34rem;
	}

	.project-card-link-label {
		letter-spacing: 0;
	}

	.project-card-link-arrow {
		opacity: 0.78;
		transition:
			opacity var(--motion-duration-fast) var(--motion-ease-standard),
			transform var(--motion-duration-standard) var(--motion-ease-standard);
	}

	.project-card:focus-within {
		border-color: var(--border-default);
		background:
			radial-gradient(
				circle at 86% -16%,
				rgba(236, 72, 153, 0.16),
				transparent 36%
			),
			radial-gradient(
				circle at 0% 0%,
				rgba(139, 92, 246, 0.14),
				transparent 32%
			),
			linear-gradient(
				180deg,
				rgba(255, 255, 255, 0.038) 0%,
				rgba(255, 255, 255, 0.014) 30%,
				rgba(255, 255, 255, 0) 100%
			),
			var(--surface-card-current-fill-strong);
		box-shadow:
			0 24px 44px -28px rgba(1, 0, 6, 0.98),
			0 18px 32px -32px rgba(139, 92, 246, 0.36),
			inset 0 1px 0 rgba(255, 255, 255, 0.035);
	}

	.project-card:focus-within::after {
		opacity: 0.22;
		transform: translate3d(-3%, -7%, 0);
	}

	.project-card:focus-within .project-card-category {
		color: var(--text-accent);
		opacity: 0.86;
	}

	.project-card:focus-within .project-card-link-arrow {
		opacity: 1;
	}

	@media (hover: hover) {
		.project-card:hover {
			border-color: var(--border-default);
			background:
				radial-gradient(
					circle at 86% -16%,
					rgba(236, 72, 153, 0.16),
					transparent 36%
				),
				radial-gradient(
					circle at 0% 0%,
					rgba(139, 92, 246, 0.14),
					transparent 32%
				),
				linear-gradient(
					180deg,
					rgba(255, 255, 255, 0.038) 0%,
					rgba(255, 255, 255, 0.014) 30%,
					rgba(255, 255, 255, 0) 100%
				),
				var(--surface-card-current-fill-strong);
			box-shadow:
				0 24px 44px -28px rgba(1, 0, 6, 0.98),
				0 18px 32px -32px rgba(139, 92, 246, 0.36),
				inset 0 1px 0 rgba(255, 255, 255, 0.035);
		}

		.project-card:hover::after {
			opacity: 0.22;
			transform: translate3d(-3%, -7%, 0);
		}

		.project-card:hover .project-card-category {
			color: var(--text-accent);
			opacity: 0.86;
		}

		.project-card:hover .project-card-link-arrow {
			opacity: 1;
		}
	}
</style>
