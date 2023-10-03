<script lang="ts">
    import { base } from "$app/paths";
    import { page } from "$app/stores";

    import { AppShell } from "@skeletonlabs/skeleton";
    import NavBrand from "$lib/components/navigation/NavBrand.svelte";
    import NavBar from "$lib/components/navigation/NavBar.svelte";
    import NavList from "$lib/components/navigation/NavList.svelte";
    import NavItem from "$lib/components/navigation/NavItem.svelte";
    import LightSwitch from "$lib/components/utilities/LightSwitch.svelte";
    import NavHamburger from "$lib/components/navigation/NavHamburger.svelte";

    export let data: WebsiteState;

    $: activeUrl = $page.url.pathname;
    $: activeName = (activeUrl !== "/" ? activeUrl.substring(activeUrl.slice("/") + 1) : "home")
    $: activeNameFormatted = activeName.charAt(0).toUpperCase() + activeName.slice(1);

    const navItemClasses: string = "mx-3 mb-0.5 my-0 text-md hover:text-secondary-500 dark:hover:text-primary-500";
    const navItemActiveClasses: string = "text-secondary-500 dark:text-primary-500";
</script>

<svelte:head>
    <title>{data.name} • {activeNameFormatted}</title>
</svelte:head>

<AppShell>
    <svelte:fragment slot="header">
        <NavBar classes="bg-surface-50 dark:bg-surface-800 h-12 p-2">
            <NavBrand>
                <a class="mr-3" href="{base}/">
                    <img class="h-9 w-9" src="{data.logo}" alt="Logo"/>
                </a>
                <span class="cursor-default text-2xl mb-0.5 font-semibold">{data.name}</span>
            </NavBrand>
            <div class="flex ml-auto items-center">
                <NavList>
                    <NavItem classes={navItemClasses} activeClasses={navItemActiveClasses} {activeUrl} href="{base}/">Home</NavItem>
                    <NavItem classes={navItemClasses} activeClasses={navItemActiveClasses} {activeUrl} href="{base}/about">About</NavItem>
                </NavList>
                <LightSwitch />
                <NavHamburger classes="fill-black dark:fill-primary-100 hover:fill-secondary-500 dark:hover:text-primary-500" />
            </div>
        </NavBar>
    </svelte:fragment>

    <slot />
</AppShell>