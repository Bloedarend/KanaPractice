<script lang="ts">
    import { getDrawerStore } from "@skeletonlabs/skeleton";
    import { navigationState } from "$lib/stores/session-store";

    const drawerStore = getDrawerStore();

    const visibleClasses: string = "portrait:flex-column portrait:absolute portrait:top-0 portrait:bottom-0 portrait:left-0 portrait:bg-primary-300";
    const hiddenClasses: string = "portrait:hidden";
</script>

<div class="flex items-center {$navigationState.drawerVisible ? visibleClasses : hiddenClasses}">
    <slot/>
</div>