const anchorMap = new Map<string, HTMLElement>();

/**
 * Set anchor and map it to the id. If no ID is provided the anchor will be mapped to an empty string.
 * @param $anchor 
 * @param id 
 */
export function setAnchor($anchor: HTMLElement, id?: string | null) {
	anchorMap.set(id || "", $anchor);
}

/**
 * Removes the anchor with the given ID. 
 * @param id
 */
export function removeAnchor (id?: string | null) {
	anchorMap.delete(id || "");
}

/**
 * Focuses the anchor with the given ID.
 * @param id
 */
export function focusAnchor(id?: string | null) {
	const $anchor = anchorMap.get(id || "");
	if ($anchor != null) {
		$anchor.focus();
	}
}