import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function for merging and applying class names.
 * It combines the `clsx` and `twMerge` utilities.
 *
 * @param {...(string | string[] | object | boolean)} inputs - Class names or objects to be merged.
 * @returns {string} The merged class names.
 */
export function cn(...inputs) {
    return twMerge(clsx(...inputs));
}
