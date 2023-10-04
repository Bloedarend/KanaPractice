import { websiteState } from "$lib/stores/session-store";
import type { Unsubscriber } from "svelte/src/runtime/store/public";

export const prerender = true;

export const load = (async () => {
    let data: WebsiteState | undefined;
    const unsubscribe: Unsubscriber = websiteState.subscribe((value: WebsiteState) => {
        data = value;
    });

    unsubscribe();
    return data;
});