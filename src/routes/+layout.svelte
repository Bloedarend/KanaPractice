<script lang="ts">
    import "../app.postcss";
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import {page} from "$app/stores";

    export let data;

    $: activeUrl = $page.url.pathname;
    $: activeName = (activeUrl !== "/" ? activeUrl.substring(activeUrl.slice("/") + 1) : "home")
    $: activeNameFormatted = activeName.charAt(0).toUpperCase() + activeName.slice(1);
</script>

<svelte:head>
    <title>{data.name} • {activeNameFormatted}</title>
    <link rel="icon" type="image/x-icon" href="{data.logo}">
</svelte:head>

<div>
<!--    <Header {data} />-->

    <main>
        <slot />
    </main>
</div>