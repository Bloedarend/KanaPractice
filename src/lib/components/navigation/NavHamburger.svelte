<script lang="ts">
    import { getDrawerStore, type DrawerSettings, type DrawerStore } from "@skeletonlabs/skeleton";
    import { navigationState } from "$lib/stores/session-store";
	import { onMount } from "svelte";

    const drawerStore: DrawerStore = getDrawerStore();
    const drawerSettings: DrawerSettings = {
        id: "portrait-drawer"
    }

    const toggleDrawer: () => void = () => {
        $navigationState.drawerVisible = !$navigationState.drawerVisible;
        if ($navigationState.drawerVisible) {
            drawerStore.open(drawerSettings);
        } else {
            drawerStore.close();
        }
    };

    const removeDrawer: () => void = () => {
        // Only remove the drawer if client is in landscape mode.
        if ($navigationState.drawerVisible && window.innerWidth > window.innerHeight) {            
            $navigationState.drawerVisible = false;
            drawerStore.close();
        }
    };

    const onResize: () => void = () => {
        removeDrawer();
    };

    onMount(() => {
        removeDrawer();
    });
    
    export let className: string = "fill-black dark:fill-primary-100 hover:fill-secondary-500 dark:hover:text-primary-500";
</script>

<svelte:window on:resize={onResize} />

<button class="{className} landscape:hidden" on:click={toggleDrawer}>
    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
    </svg>
</button>