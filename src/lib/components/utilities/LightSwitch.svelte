<script lang="ts">
    import { modeOsPrefers, modeUserPrefers, modeCurrent, setModeUserPrefers, setModeCurrent } from '@skeletonlabs/skeleton';

    export let className: string = "mx-3 dark:fill-primary-50  hover:text-secondary-500 dark:hover:text-primary-500 dark:fill-primary-100 hover:fill-secondary-500 dark:hover:fill-primary-500"

    $modeCurrent = $modeUserPrefers ?? $modeOsPrefers;

    const switchMode: () => void = () => {
        $modeCurrent = !$modeCurrent;
        if (typeof $modeCurrent === "boolean") {
            setModeUserPrefers($modeCurrent);
            setModeCurrent($modeCurrent);
        }
    }

    const svgPath: { sun: string, moon: string } = {
        sun: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",
        moon: "M289.452 14C156.032 14 48 122.36 48 256C48 389.64 156.032 498 289.452 498C354.92 498 414.229 471.855 457.766 429.505C463.168 424.212 464.572 416.001 461.115 409.303C457.658 402.604 450.204 398.823 442.75 400.12C432.163 401.956 421.36 402.929 410.232 402.929C305.549 402.929 220.636 317.796 220.636 212.786C220.636 141.698 259.527 79.7938 317.108 47.167C323.698 43.3857 327.047 35.8232 325.427 28.4768C323.806 21.1304 317.541 15.6205 309.978 14.9723C303.172 14.4321 296.366 14.108 289.452 14.108V14Z"
    };
</script>

<button class="{className} flex items-center justify-center" on:click="{switchMode}">
    <span class="pb-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d={$modeCurrent ? svgPath.sun : svgPath.moon} />
        </svg>
    </span>
    <slot />
</button>