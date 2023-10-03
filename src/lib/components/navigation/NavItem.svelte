<script lang="ts">
    import { base } from "$app/paths";

    export let href: string;
    export let activeUrl: string;

    href = href ?? `${base}/`;
    activeUrl = activeUrl ?? "";

    export let classes: string = "";
    export let activeClasses: string = "";
</script>

<a class="{classes} {activeUrl === href | activeClasses}" href="{href}">
    <slot />
</a>