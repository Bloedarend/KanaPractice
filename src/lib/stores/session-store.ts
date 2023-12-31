import { writable } from 'svelte/store';
import type { Writable } from "svelte/store";

export let navigationState: Writable<NavigationState> = writable({
    drawerVisible: false,
});