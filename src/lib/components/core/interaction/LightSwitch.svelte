<script lang="ts">
    import { modeOsPrefers, modeUserPrefers, modeCurrent, setModeUserPrefers, setModeCurrent } from '@skeletonlabs/skeleton';
    import MoonIcon from "$lib/components/icons/MoonIcon.svelte";
    import Button from "$lib/components/core/interaction/Button.svelte";
    import SunIcon from "$lib/components/icons/SunIcon.svelte";

    export let className: string = "";
    export let size: string = "1em";

    $modeCurrent = $modeUserPrefers ?? $modeOsPrefers;

    const switchMode: () => void = () => {
        $modeCurrent = !$modeCurrent;
        if (typeof $modeCurrent === "boolean") {
            setModeUserPrefers($modeCurrent);
            setModeCurrent($modeCurrent);
        }
    }
</script>

<Button {className} on:click={switchMode}>
    {#if $modeCurrent}
        <SunIcon {size} />
    {:else}
        <MoonIcon {size} />
    {/if}
</Button>