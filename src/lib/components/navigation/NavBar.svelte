<script lang="ts">
     export let classes: string = "";
</script>

<div class="{classes}"></div> <!-- Empty div to take up same space as navbar -->
<nav class="{classes} flex absolute left-0 right-0 top-0 w-full">
    <slot />
</nav>