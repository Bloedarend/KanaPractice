<script lang="ts">
    import { base } from "$app/paths";
    import AnchorButton from "$lib/components/core/interaction/Anchor.svelte";
    import Icon from "$lib/components/core/assets/Icon.svelte";

    export let path: string = "";
    export let width: number = 512;
    export let height: number = 512;

    export let href: string = `${base}/`;
    export let activeUrl: string = "";

    export let className: string = "";
    export let activeClassName: string = "";
    export let inactiveClassName: string = "";
</script>

<AnchorButton className="{activeUrl.startsWith(href) && href !== `${base}/` || href === activeUrl ? activeClassName : inactiveClassName} {className} mx-1.5" {href}>
    {#if path.length > 0}
        <Icon className="fill-inherit dark:fill-inherit pb-0.5" {path} {width} {height} />
    {/if}
    <slot />
</AnchorButton>