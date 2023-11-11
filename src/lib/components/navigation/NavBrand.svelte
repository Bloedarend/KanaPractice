<script lang="ts">
    import { base } from "$app/paths";

    export let className: string = "";
    export let href: string = `${base}/`
</script>

<div class="flex h-full absolute top-0 left-0">
    <a class="{className} flex items-center pl-2 bg-surface-200 dark:bg-surface-800 transition-size duration-300 hover:pr-10" href={href}>
        <slot />
    </a>
    <div class="w-16 h-full bg-gradient-120 from-50% from-surface-200 dark:from-surface-800 to-50% to-white/0 z-[41]"></div>
</div>