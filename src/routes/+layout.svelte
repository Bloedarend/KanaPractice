<script lang="ts">
    import { setInitialClassState } from "@skeletonlabs/skeleton";
    import "../app.postcss";
	import { PUBLIC_LOGO, PUBLIC_NAME } from "$env/static/public";
</script>

<svelte:head>
    <title>{PUBLIC_NAME}</title>
    <link rel="icon" type="image/x-icon" href={PUBLIC_LOGO} />
    {@html `<script>(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<slot />