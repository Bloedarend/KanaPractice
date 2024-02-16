<script lang="ts">
	import Icon from "$lib/components/core/assets/Icon.svelte";

	export let path: string = "";
	export let width: number = 512;
	export let height: number = 512;
</script>

<div class="cursor-pointer select-none aspect-video w-auto rounded-xl shadow-inner bg-surface-200 dark:bg-surface-800 m-2 p-6 transition-size active:scale-100 hover:scale-102 hover:bg-surface-300/40 hover:dark:bg-surface-800/80">
	<div class="flex flex-col">
		<Icon className="fill-primary-600 dark:fill-primary-400 mb-6" size="2em" {path} {width} {height} />
		<span class="text-primary-600 dark:text-primary-400 text-2xl 2xs:text-3xl mb-4">
			<slot name="title" />
		</span>
		<span class="text-xs 2xs:text-sm xs:text-md">
			<slot name="description" />
		</span>
	</div>
</div>