<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		id?: string;
		title?: string;
		class?: string;
		children?: Snippet;
	}

	let { id, title = "", class: className = "", children }: Props = $props();
</script>

<section {id} class={`py-16 sm:py-24 ${className}`}>
	<div class="mx-auto w-full max-w-6xl px-6 sm:px-8">
		{#if title}
			<h2 class="text-2xl font-semibold tracking-tight sm:text-3xl">
				{title}
			</h2>
		{/if}

		<div class={title ? "mt-8" : ""}>
			{@render children?.()}
		</div>
	</div>
</section>
