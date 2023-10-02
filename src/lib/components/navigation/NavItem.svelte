<script lang="ts">
    import {base} from "$app/paths";

    export let href: String;
    export let activeUrl: String;

    href = href ?? `${base}/`;
    activeUrl = activeUrl ?? "";

    const activeClasses = "text-secondary-500 dark:text-primary-500";
    const inactiveClasses = "hover:text-secondary-500 dark:hover:text-primary-500";

    const classes = href === activeUrl ? activeClasses : inactiveClasses;
</script>

<a class="{classes} mx-3 mb-0.5 my-0 text-md" href="{href}">
    <slot />
</a>