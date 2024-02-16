<script lang="ts">
	export let className: string = "";
	export let href = "";
</script>

<a class="{className} btn flex flex-row justify-center items-center cursor-pointer select-none" href="{href}">
	<slot />
</a>