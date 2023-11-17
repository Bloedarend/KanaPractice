<script lang="ts">
    import { page } from '$app/stores';
    import { PUBLIC_NAME, PUBLIC_GITHUB_REPO } from "$env/static/public";

    const code: string = $page.status ?? "000";
    const message: string = $page.error !== null ? $page.error.message : "Unknown";
</script>

<svelte:head>
    <title>{PUBLIC_NAME} • {$page.status}</title>
</svelte:head>

<div class="flex flex-col h-full">
    <div class="flex flex-col flex-grow justify-center items-center pb-10">
        <div class="text-4xl text-center p-3 rounded-xl shadow-inner">{code} | {message}</div>
        <a class="m-2 text-center w-2/3" target="_blank" href="{PUBLIC_GITHUB_REPO}/issues">If you believe this to be a bug, please consider opening an issue on the Github repository.</a>
    </div>
</div>