<script lang="ts">
    import { base } from "$app/paths";

    export let className: string = "";
    export let href: string = `${base}/`
</script>

<a class="{className} flex items-center" href={href}>
    <slot />
</a>