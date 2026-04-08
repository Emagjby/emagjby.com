<script lang="ts">
	import type { Snippet } from "svelte";
	import type { SvelteHTMLElements } from "svelte/elements";

	type Props = SvelteHTMLElements["div"] & {
		children?: Snippet;
	};

	let { class: className = "", children, ...rest }: Props = $props();
</script>

<div
	class={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10 ${className}`}
	{...rest}
>
	{@render children?.()}
</div>
