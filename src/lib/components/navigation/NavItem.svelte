<script lang="ts">
    import { base } from "$app/paths";

    export let href: string;
    export let activeUrl: string;

    href = href ?? `${base}/`;
    activeUrl = activeUrl ?? "";

    console.log(href, activeUrl, `${base}/`);

    export let className: string = "flex flex-row items-center mx-3 mb-0.5 my-0 text-md hover:text-secondary-500 dark:hover:text-primary-500 dark:fill-primary-50 hover:fill-secondary-500 dark:hover:fill-primary-500";
    export let activeClassName: string = "flex flex-row items-center mx-3 mb-0.5 my-0 text-md text-secondary-500 dark:text-primary-500 fill-secondary-500 dark:fill-primary-500";
</script>

<a class="{activeUrl.startsWith(href) && href !== `${base}/` || href === activeUrl ? activeClassName : className}" href="{href}">
    <slot name="icon" />
    <slot name="name" />
</a>