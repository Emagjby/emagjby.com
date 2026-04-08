<script lang="ts">
	import AboutSection from "$lib/components/AboutSection.svelte";
	import Header from "$lib/components/Header.svelte";
	import Hero from "$lib/components/Hero.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import ProjectSection from "$lib/components/ProjectSection.svelte";

	import { siteContent } from "$lib/content/site";
</script>

<svelte:head>
	<title>{siteContent.title}</title>
	<meta name="description" content={siteContent.description} />
</svelte:head>

<div class="min-h-screen">
	<Header />
	<Hero />
	<ProjectSection />
	<AboutSection />
	<Footer />
</div>
