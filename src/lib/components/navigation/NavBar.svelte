<script lang="ts">
     export let className: string = "bg-surface-50 dark:bg-surface-800 h-12 p-2";
</script>

<div class="{className}"></div> <!-- Empty div to take up same space as navbar -->
<nav class="{className} flex absolute left-0 right-0 top-0 w-full">
    <slot />
</nav>