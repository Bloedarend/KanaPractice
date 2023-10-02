<script lang="ts">
    import {page} from "$app/stores";
    import {AppShell} from "@skeletonlabs/skeleton";
    import NavBrand from "$lib/components/navigation/NavBrand.svelte";
    import NavBar from "$lib/components/navigation/NavBar.svelte";
    import NavList from "$lib/components/navigation/NavList.svelte";
    import NavItem from "$lib/components/navigation/NavItem.svelte";
    import LightSwitch from "$lib/components/utilities/LightSwitch.svelte";
    import {base} from "$app/paths";
    import NavHamburger from "$lib/components/navigation/NavHamburger.svelte";

    export let data;

    $: activeUrl = $page.url.pathname;
    $: activeName = (activeUrl !== "/" ? activeUrl.substring(activeUrl.slice("/") + 1) : "home")
    $: activeNameFormatted = activeName.charAt(0).toUpperCase() + activeName.slice(1);
</script>

<svelte:head>
    <title>{data.name} • {activeNameFormatted}</title>
</svelte:head>

<AppShell>
    <svelte:fragment slot="header">
        <NavBar>
            <NavBrand>
                <a class="mr-3" href="{base}/">
                    <img class="h-9 w-9" src="{data.logo}" alt="Logo"/>
                </a>
                <span class="cursor-default text-2xl mb-0.5 font-semibold">{data.name}</span>
            </NavBrand>
            <div class="flex ml-auto items-center">
                <NavList>
                    <NavItem {activeUrl} href="{base}/">Home</NavItem>
                    <NavItem {activeUrl} href="{base}/about">About</NavItem>
                </NavList>
                <LightSwitch />
                <NavHamburger />
            </div>
        </NavBar>
    </svelte:fragment>

    <main>
        <slot />
    </main>
</AppShell>