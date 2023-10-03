import { websiteState } from "$lib/stores/session-store";
import type { Unsubscriber } from "svelte/src/runtime/store/public";

export const prerender = true;

export const load = (async (event) => {
    let data: WebsiteState;
    const unsubscribe: Unsubscriber = websiteState.subscribe((value: WebsiteState) => {
        data = value;
    });

    unsubscribe();
    return data;
});