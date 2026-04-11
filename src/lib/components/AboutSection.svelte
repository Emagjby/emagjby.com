<script lang="ts">
	import Section from "$lib/components/Section.svelte";
	import { siteContent } from "$lib/content/site";
</script>

<Section
	id="about"
	title={siteContent.about.title}
	description={siteContent.about.body}
	spaceBefore="var(--layout-section-space-compact)"
	spaceAfter="var(--layout-section-space-tight)"
/>
