<script lang="ts">
    import { navigationState } from "$lib/stores/session-store";

    export let className: string = "";

    const hidden = $navigationState.drawerVisible ? "" : "portrait:hidden"
</script>

<div class="{className} flex items-center {hidden}">
    <slot/>
</div>