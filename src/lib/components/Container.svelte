<script lang="ts">
	import type { Snippet } from "svelte";
	import type { SvelteHTMLElements } from "svelte/elements";

	type Props = SvelteHTMLElements["div"] & {
		size?: "wide" | "narrow";
		children?: Snippet;
	};

	let {
		class: className = "",
		size = "wide",
		children,
		...rest
	}: Props = $props();
</script>

<div
	class={[
		"mx-auto w-full px-[var(--layout-gutter)]",
		size === "narrow"
			? "max-w-[var(--layout-max-width-narrow)]"
			: "max-w-[var(--layout-max-width-wide)]",
		className,
	]}
	{...rest}
>
	{@render children?.()}
</div>
