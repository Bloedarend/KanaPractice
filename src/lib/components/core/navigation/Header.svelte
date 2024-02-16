<script lang="ts">
	import { base } from "$app/paths";
	import { PUBLIC_LOGO, PUBLIC_NAME } from "$env/static/public";
	import NavBrand from "$lib/components/core/navigation/NavBrand.svelte";
	import NavBar from "$lib/components/core/navigation/NavBar.svelte";
	import NavItem from "$lib/components/core/navigation/NavItem.svelte";
	import LightSwitch from "$lib/components/core/interaction/LightSwitch.svelte";
	import NavList from "$lib/components/core/navigation/NavList.svelte";

	export let activeUrl: string = "/"
</script>

<NavBar className="bg-surface-100 dark:bg-surface-700">
	<NavBrand href="{base}/">
		<img class="h-9 w-9 mr-3" src="{base}/{PUBLIC_LOGO}" alt="Logo"/>
		<span class="text-2xl mb-0.5 font-semibold hidden 2xs:inline xs:hidden md:inline tracking-wide">{PUBLIC_NAME}</span>
	</NavBrand>
	<div class="flex ml-auto items-center">
		<NavList className="bg-surface-100 dark:bg-surface-700 shadow-t-lg xs:shadow-none">
			<NavItem className="h-11 variant-soft-tertiary w-1/4 xs:w-fit hover:text-primary-600 dark:hover:text-primary-400 hover:fill-primary-600 dark:hover:fill-primary-400" activeClassName="text-primary-600 dark:text-primary-400 fill-primary-600 dark:fill-primary-400" inactiveClassName="text-surface-900 dark:text-success-50 fill-surface-900 dark:fill-surface-50" {activeUrl} href="{base}/" path="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" width="576">
				<div class="hidden md:block">Home</div>
			</NavItem>
			<NavItem className="h-11 variant-soft-tertiary w-1/4 xs:w-fit hover:text-primary-600 dark:hover:text-primary-400 hover:fill-primary-600 dark:hover:fill-primary-400" activeClassName="text-primary-600 dark:text-primary-400 fill-primary-600 dark:fill-primary-400" inactiveClassName="text-surface-900 dark:text-success-50 fill-surface-900 dark:fill-surface-50" {activeUrl} href="{base}/practice" path="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" width="448">
				<div class="hidden md:block">Practice</div>
			</NavItem>
			<NavItem className="h-11 variant-soft-tertiary w-1/4 xs:w-fit hover:text-primary-600 dark:hover:text-primary-400 hover:fill-primary-600 dark:hover:fill-primary-400" activeClassName="text-primary-600 dark:text-primary-400 fill-primary-600 dark:fill-primary-400" inactiveClassName="text-surface-900 dark:text-success-50 fill-surface-900 dark:fill-surface-50" {activeUrl} href="{base}/settings" path="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z">
				<div class="hidden md:block">Settings</div>
			</NavItem>
		</NavList>
		<LightSwitch className="h-11 variant-soft-tertiary fill-surface-900 dark:fill-surface-50 hover:fill-primary-600 dark:hover:fill-primary-400" />
		<NavItem className="h-11 variant-soft-tertiary fill-surface-900 dark:fill-surface-50 hover:fill-primary-600 dark:hover:fill-primary-400" path="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" width="500" />
	</div>
</NavBar>