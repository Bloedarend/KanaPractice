<script lang="ts">
	import "../app.postcss";

	import { base } from "$app/paths";
	import { page } from "$app/stores";

	import { AppShell, initializeStores, setInitialClassState } from "@skeletonlabs/skeleton";
	import { PUBLIC_LOGO, PUBLIC_NAME } from "$env/static/public";
	import Header from "$lib/components/navigation/Header.svelte";

	initializeStores();

	$: activeUrl = $page.url.pathname;
	$: activeName = (activeUrl !== "/" ? activeUrl.slice(activeUrl.lastIndexOf("/") + 1) : "home");
	$: activeNameFormatted = activeName.charAt(0).toUpperCase() + activeName.slice(1);
</script>

<svelte:head>
	<title>{PUBLIC_NAME} • {activeNameFormatted}</title>
	<link rel="icon" type="image/x-icon" href="{base}/{PUBLIC_LOGO}" />
	{@html `<script>(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<Header {activeUrl} />
	</svelte:fragment>
	<main class="flex-grow">
		<div class="h-[calc(100vh-7.5rem)] xs:h-[calc(100vh-4rem)] overflow-y-auto">
			<slot />
		</div>
	</main>
</AppShell>