<script lang="ts">
    import { page } from '$app/stores';
    import { PUBLIC_NAME } from "$env/static/public";
    import Button from "$lib/components/interaction/Button.svelte";

    const code: string = $page.status ?? "000";
    const message: string = $page.error !== null ? $page.error.message : "Unknown";
</script>

<svelte:head>
    <title>{PUBLIC_NAME} • {$page.status}</title>
</svelte:head>

<div class="flex flex-col justify-center items-center h-full">
    <div class="flex flex-grow justify-center items-center">
        <Button className="text-3xl text-center p-6 mb-48 rounded-xl bg-surface-200-700-token shadow-inner">{code} | {message}</Button>
    </div>
    <div class="flex flex-col justify-center items-center p-2 rounded-t-3xl w-full shadow-t-md">
        <a class="m-2 text-center" href="/issues">If you believe this to be a bug, please consider opening an issue on the Github repository.</a>
    </div>
</div>