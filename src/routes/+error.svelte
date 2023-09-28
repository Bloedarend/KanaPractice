<script>
    import { page } from '$app/stores';
</script>

<div class="bg-[#1da1f2]">
    <h1>{$page.status}: {$page.error.message}</h1>
</div>
