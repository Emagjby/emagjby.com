<script lang="ts">
	const title = "emagjby";
	const subtitle = "Main public hub for Emagjby.";
</script>

<svelte:head>
	<title>emagjby</title>
	<meta
		name="description"
		content="Main public hub for Emagjby projects and identity."
	/>
</svelte:head>

<section
	class="min-h-screen bg-black text-white flex items-center justify-center px-6"
>
	<div class="max-w-3xl">
		<h1 class="text-5xl font-bold tracking-tight">{title}</h1>
		<p class="mt-4 text-lg text-white/70">{subtitle}</p>
	</div>
</section>
