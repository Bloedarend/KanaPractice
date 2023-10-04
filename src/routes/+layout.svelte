<script lang="ts">
    import { setInitialClassState } from "@skeletonlabs/skeleton";
    import "../app.postcss";

    export let data: WebsiteState;
</script>

<svelte:head>
    <title>{data.name}</title>
    <link rel="icon" type="image/x-icon" href={data.logo} />
    {@html `<script>(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<slot />