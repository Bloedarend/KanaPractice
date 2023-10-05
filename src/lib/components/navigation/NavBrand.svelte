<script lang="ts">
    export let className: string = "";
</script>

<div class="{className} flex items-center">
    <slot />
</div>