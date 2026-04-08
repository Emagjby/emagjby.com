<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		id?: string;
		title?: string;
		eyebrow?: string;
		description?: string;
		class?: string;
		contentClass?: string;
		children?: Snippet;
	}

	let {
		id,
		title = "",
		eyebrow = "",
		description = "",
		class: className = "",
		contentClass = "",
		children,
	}: Props = $props();
</script>

<section {id} class={`py-20 sm:py-28 ${className}`}>
	<div class="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">
		{#if eyebrow || title || description}
			<div class="max-w-3xl">
				{#if eyebrow}
					<p
						class="text-sm font-medium uppercase tracking-[0.2em] text-white/45"
					>
						{eyebrow}
					</p>
				{/if}

				{#if title}
					<h2
						class="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
					>
						{title}
					</h2>
				{/if}

				{#if description}
					<p
						class="mt-4 text-base leading-8 text-white/65 sm:text-lg"
					>
						{description}
					</p>
				{/if}
			</div>
		{/if}

		<div
			class={`${eyebrow || title || description ? "mt-10" : ""} ${contentClass}`}
		>
			{@render children?.()}
		</div>
	</div>
</section>
