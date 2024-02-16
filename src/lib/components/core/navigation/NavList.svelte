<script lang="ts">
    export let className: string = "";
</script>

<div class="{className} flex items-center justify-center h-14 xs:relative fixed bottom-0 right-0 left-0">
    <slot/>
</div>