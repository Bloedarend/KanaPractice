<script lang="ts">
    import "../app.postcss";
    export let data: WebsiteState;
</script>

<svelte:head>
    <title>{data.name}</title>
    <link rel="icon" type="image/x-icon" href="{data.logo}">
</svelte:head>

<slot />