<script lang="ts">
	import "../app.postcss";

	import { base } from "$app/paths";

	import { AppBar, AppShell, initializeStores, setInitialClassState } from "@skeletonlabs/skeleton";
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	import { PUBLIC_LOGO, PUBLIC_NAME } from "$env/static/public";
	import { title } from "$lib/stores/session-store";
	import LightSwitch from "$lib/components/core/interaction/LightSwitch.svelte";
	import Header from "$lib/components/core/navigation/Header.svelte";
	import NavItem from "$lib/components/core/navigation/NavItem.svelte";
	import Button from "$lib/components/core/interaction/Button.svelte";
	import HomeIcon from "$lib/components/icons/HomeIcon.svelte";
	import Dropdown from "$lib/components/core/interaction/ComboBox.svelte";
	import NavBrand from "$lib/components/core/navigation/NavBrand.svelte";
	import NavBar from "$lib/components/core/navigation/NavBar.svelte";

	initializeStores();
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

</script>

<svelte:head>
	<title>{PUBLIC_NAME} • {$title}</title>
	<link rel="icon" type="image/x-icon" href="{base}/{PUBLIC_LOGO}" />
	{@html `<script>(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
<!--		<Header />-->
		<!-- None background classes in background attribute because of AppBar limitations. -->
		<AppBar background="justify-center h-16 bg-none" padding="p-2" shadow="shadow-md">
			<svelte:fragment slot="lead">
				<a class="flex flex-row items-center" href="/">
					<img class="h-9 w-9 mr-3" src="{base}/{PUBLIC_LOGO}" alt="Logo"/>
					<span class="text-2xl font-semibold tracking-wide">{PUBLIC_NAME}</span>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Button>
					<HomeIcon />
					<span>Home</span>
				</Button>
				<Dropdown>
					<HomeIcon />
					<span>Practice</span>
				</Dropdown>
				<Button>
					<HomeIcon />
					<span>Settings</span>
				</Button>
				<LightSwitch className="h-11 variant-soft-tertiary fill-surface-900 dark:fill-surface-50 hover:fill-primary-600 dark:hover:fill-primary-400" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<main class="flex-grow">
		<slot />
<!--		<div class="h-[calc(100vh-7.5rem)] xs:h-[calc(100vh-4rem)] overflow-y-auto">-->
<!--		</div>-->
	</main>
</AppShell>