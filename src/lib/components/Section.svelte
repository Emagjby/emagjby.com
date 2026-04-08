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

<section {id} class={`py-20 sm:py-28 ${className}`}>
	<div class="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
		{#if title}
			<div class="max-w-2xl">
				<h2
					class="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
				>
					{title}
				</h2>
			</div>
		{/if}

		<div class={title ? "mt-10" : ""}>
			{@render children?.()}
		</div>
	</div>
</section>
