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
$: activeName = (activeUrl !== "/" ? activeUrl.slice(activeUrl.lastIndexOf("/") + 1) : "home");
$: activeNameFormatted = activeName.charAt(0).toUpperCase() + activeName.slice(1);

const navItemClasses: string = "mx-3 mb-0.5 my-0 text-md hover:text-secondary-500 dark:hover:text-primary-500";
const navItemActiveClasses: string = "text-secondary-500 dark:text-primary-500";
</script>

<svelte:head>
    <title>{PUBLIC_NAME}</title>
    <link rel="icon" type="image/x-icon" href={PUBLIC_LOGO} />
    {@html `<script>(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<Drawer>
    {#if $drawerStore.id === "portrait-drawer"}
        <NavList>
            <NavItem classes={navItemClasses} activeClasses={navItemActiveClasses} {activeUrl} href="{base}/">Home</NavItem>
            <NavItem classes={navItemClasses} activeClasses={navItemActiveClasses} {activeUrl} href="{base}/about">About</NavItem>
        </NavList>
    {/if}
</Drawer>
<slot />