<script lang="ts">
	import type { Snippet } from "svelte";
	import Container from "$lib/components/Container.svelte";

	interface Props {
		id?: string;
		title?: string;
		eyebrow?: string;
		description?: string;
		size?: "wide" | "narrow";
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
		class: className = "",
		contentClass = "",
		children,
	}: Props = $props();
</script>

<section {id} class={["py-[var(--layout-section-space)]", className]}>
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
						? "mt-[var(--layout-section-gap)]"
						: "",
					contentClass,
				]}
			>
				{@render children()}
			</div>
		{/if}
	</Container>
</section>
