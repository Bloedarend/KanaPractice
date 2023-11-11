<script lang="ts">
     export let className: string = "";
</script>

<div class="{className} h-16 invisible"></div> <!-- Empty div to make content start below the fixed navbar -->
<nav class="{className} h-16 p-1 flex fixed top-0 z-40 w-full shadow-lg">
    <slot />
</nav>