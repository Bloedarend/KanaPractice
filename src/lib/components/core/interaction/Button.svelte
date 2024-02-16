<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let className: string = "";

	const dispatch = createEventDispatcher();

	function onClick(event) {
		dispatch("click", event.detail)
	}
</script>

<button class="{className} btn flex flex-row justify-center items-center cursor-pointer select-none" on:click={onClick}>
	<slot />
</button>