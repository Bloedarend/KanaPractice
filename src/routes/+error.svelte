<script lang="ts">
    import { page } from '$app/stores';
    import { PUBLIC_NAME, PUBLIC_REPO_FRONTEND } from "$env/static/public";

    const code: string = $page.status ?? "000";
    const message: string = $page.error !== null ? $page.error.message : "Unknown";
</script>

<svelte:head>
    <title>{PUBLIC_NAME} • {$page.status}</title>
</svelte:head>

<div class="flex flex-row justify-center items-center">
    <div class="flex flex-col w-96 p-10 items-center justify-center">
        <p class="text-3xl text-center">{code} | {message}</p>
        <div class="absolute bottom-0 items-center justify-center">
            <p>If this is a bug, please consider opening an issue on the <a class="text-primary-500" href="{PUBLIC_REPO_FRONTEND}/issues">GitHub page</a>. Click the buttons below to either go back to the previous page or to go to the home page.</p>
            <button class="btn variant-filled-primary">Back</button>
        </div>
    </div>
</div>