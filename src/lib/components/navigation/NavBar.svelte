<script lang="ts">
    import {page} from "$app/stores";
    $: activeUrl = $page.url.pathname;

    export let toggleVisibility;
</script>

<nav class="bg-surface-50 dark:bg-surface-800 flex absolute left-0 right-0 top-0 w-full p-2">
    <slot />
</nav>