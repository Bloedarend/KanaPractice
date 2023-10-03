<script lang="ts">
    import { page } from '$app/stores';
    import { base } from "$app/paths";

    export let data: WebsiteState;
</script>

<div class="flex flex-row items-center justify-center absolute w-full h-full">
    <a href="{base}/">
        <img class="h-60 w-60" src="{data.logo}" alt="Logo" />
    </a>
    <div class="flex flex-col m-10 h-60 w-60 items-center justify-center text-center">
        <p class="text-9xl">{$page.status}</p>
        <p class="text-3xl break-all">{$page.error.message}</p>
    </div>
</div>