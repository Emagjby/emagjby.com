<script lang="ts">
	import type { Snippet } from "svelte";
	import Container from "$lib/components/Container.svelte";

	interface Props {
		id?: string;
		title?: string;
		eyebrow?: string;
		description?: string;
		size?: "wide" | "narrow";
		spaceBefore?: string;
		spaceAfter?: string;
		contentGap?: string;
		class?: string;
		contentClass?: string;
		children?: Snippet;
	}

	let {
		id,
		title = "",
		eyebrow = "",
		description = "",
		size = "wide",
		spaceBefore = "var(--layout-section-space)",
		spaceAfter = "var(--layout-section-space)",
		contentGap = "var(--layout-section-gap)",
		class: className = "",
		contentClass = "",
		children,
	}: Props = $props();
</script>

<section
	{id}
	class={[
		"pt-[var(--section-space-before)] pb-[var(--section-space-after)]",
		className,
	]}
	style:--section-space-before={spaceBefore}
	style:--section-space-after={spaceAfter}
	style:--section-content-gap={contentGap}
>
	<Container {size}>
		{#if eyebrow || title || description}
			<div class="max-w-[var(--layout-section-heading-width)]">
				{#if eyebrow}
					<p
						class="text-sm font-medium uppercase tracking-[0.2em] text-(--text-secondary)"
					>
						{eyebrow}
					</p>
				{/if}

				{#if title}
					<h2
						class={[
							eyebrow
								? "mt-[var(--layout-section-heading-title-gap)]"
								: "",
							"text-2xl font-semibold tracking-tight text-(--text-primary) sm:text-3xl",
						]}
					>
						{title}
					</h2>
				{/if}

				{#if description}
					<p
						class={[
							title || eyebrow
								? "mt-[var(--layout-section-heading-copy-gap)]"
								: "",
							"text-base leading-8 text-(--text-muted) sm:text-lg",
						]}
					>
						{description}
					</p>
				{/if}
			</div>
		{/if}

		{#if children}
			<div
				class={[
					eyebrow || title || description
						? "mt-[var(--section-content-gap)]"
						: "",
					contentClass,
				]}
			>
				{@render children()}
			</div>
		{/if}
	</Container>
</section>
