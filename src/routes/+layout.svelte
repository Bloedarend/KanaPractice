<script lang="ts">
    import { Drawer, getDrawerStore, setInitialClassState } from "@skeletonlabs/skeleton";
    import { initializeStores } from '@skeletonlabs/skeleton';
    import "../app.postcss";
	import { PUBLIC_LOGO, PUBLIC_NAME } from "$env/static/public";
	import NavList from "$lib/components/navigation/NavList.svelte";
	import NavItem from "$lib/components/navigation/NavItem.svelte";
	import { base } from "$app/paths";
	import { page } from "$app/stores";
    
    initializeStores();

    const drawerStore = getDrawerStore();
    $: activeUrl = $page.url.pathname;
</script>

<svelte:head>
    <title>{PUBLIC_NAME}</title>
    <link rel="icon" type="image/x-icon" href={PUBLIC_LOGO} />
    {@html `<script>(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<Drawer>
    <div class=""></div>
    {#if $drawerStore.id === "portrait-drawer"}
        <NavList className="grid w-full justify-items-center">
            <NavItem className="hover:text-secondary-500 dark:hover:text-primary-500" {activeUrl} href="{base}/">Home</NavItem>
            <NavItem className="hover:text-secondary-500 dark:hover:text-primary-500" {activeUrl} href="{base}/about">About</NavItem>
        </NavList>
    {/if}
</Drawer>
<slot />