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
        sun: "M361.537 1.237C366.537 3.337 370.137 7.837 371.137 13.137L391.037 121.037 498.937 140.837C504.237 141.837 508.737 145.437 510.837 150.437 512.937 155.437 512.337 161.137 509.237 165.637L446.937 256.037 509.237 346.337C512.337 350.837 512.937 356.537 510.837 361.537 508.737 366.537 504.237 370.137 498.937 371.137L391.037 391.037 371.137 498.937C370.137 504.237 366.537 508.737 361.537 510.837 356.537 512.937 350.837 512.337 346.337 509.237L256.037 446.937 165.737 509.237C161.237 512.337 155.537 512.937 150.537 510.837 145.537 508.737 141.937 504.237 140.937 498.937L121.037 391.037 13.137 371.137C7.837 370.137 3.337 366.537 1.237 361.537-.863 356.537-.263 350.837 2.837 346.337L65.137 256.037 2.837 165.737C-.263 161.237-.863 155.537 1.237 150.537 3.337 145.537 7.837 141.937 13.137 140.937L121.037 121.037 140.937 13.137C141.937 7.837 145.537 3.337 150.537 1.237 155.537-.863 161.237-.263 165.737 2.837L256.037 65.137 346.337 2.837C350.837-.263 356.537-.863 361.537 1.237Z",
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