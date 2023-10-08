<script lang="ts">
     export let className: string = "bg-surface-50 dark:bg-surface-900 h-12 p-2 shadow-lg";
</script>

<div class="{className}"></div> <!-- Empty div to make content start below the fixed navbar -->
<nav class="{className} flex fixed top-0 z-100 w-full">
    <slot />
</nav>