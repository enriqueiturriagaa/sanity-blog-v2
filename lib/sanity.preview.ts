"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
    throw new Error(`Unable to load preview content. Log in to Sanity to access unpublished content.`);
}

if (!projectId || !dataset) {
    throw new Error(`Missing projectId or dataset. Check your sanity.json or .env file configuration.`);
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
});