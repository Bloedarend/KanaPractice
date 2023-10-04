<script lang="ts">
    import { getDrawerStore } from "@skeletonlabs/skeleton";
    import { navigationState } from "$lib/stores/session-store";

    const hidden = $navigationState.drawerVisible ? "" : "portrait:hidden"
</script>

<div class="flex items-center {hidden}">
    <slot/>
</div>