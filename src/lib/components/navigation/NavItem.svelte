<script lang="ts">
    import { base } from "$app/paths";

    export let href: string;
    export let activeUrl: string;

    href = href ?? `${base}/`;
    activeUrl = activeUrl ?? "";

    export let className: string = "mx-3 mb-0.5 my-0 text-md hover:text-secondary-500 dark:hover:text-primary-500";
    export let activeClassName: string = "text-secondary-500 dark:text-primary-500";
</script>

<a class="{className} {activeUrl !== href || activeClassName}" href="{href}">
    <slot />
</a>