<script lang="ts">
	export let className: string = ""
	export let path: string = "";
	export let size: string = "1em";
	export let width: number = 512;
	export let height: number = 512;
</script>

<svg class={className} xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 {width} {height}">
	<path d={path}/>
</svg>