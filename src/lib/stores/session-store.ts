import {readable, writable} from 'svelte/store';
import type { Readable, Writable } from "svelte/store";

export let websiteState: Readable<WebsiteState> = readable({
    name: "KanaPractice",
    logo: "/logo.svg"
});

export let navigationState: Writable<NavigationState> = writable({
    listIsVisible: false
});