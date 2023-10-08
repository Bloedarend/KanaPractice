<script lang="ts">
     export let className: string = "h-12 p-2 shadow-lg";
</script>

<nav class="{className} flex sticky left-0 right-0 top-0 w-full">
    <slot />
</nav>