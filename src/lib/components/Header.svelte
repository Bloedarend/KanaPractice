<script lang="ts">
    import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from "flowbite-svelte";
    import {base} from "$app/paths";
    import {page} from "$app/stores";

    export let data;

    $: activeUrl = $page.url.pathname;
</script>

<header class="relative px-8">
    <Navbar navClass="px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b" let:hidden let:toggle>
        <NavBrand href="{base}/">
            <img src="{data.logo}" class="mx-3 h-9" alt="Logo" />
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{data.name}</span>
        </NavBrand>
        <NavHamburger on:click={toggle} />
        <NavUl {activeUrl} {hidden}>
            <NavLi href="{base}/">Home</NavLi>
            <NavLi href="/about">About</NavLi>
            <NavLi href="/docs/components/navbar">Navbar</NavLi>
            <NavLi href="/pricing">Pricing</NavLi>
            <NavLi href="/contact">Contact</NavLi>
        </NavUl>
    </Navbar>
</header>