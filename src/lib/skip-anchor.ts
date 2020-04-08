import { setAnchor, removeAnchor } from "./util";

/**
 * Anchor that the skip button can skip to.
 * @attr {String} id - Optional ID that should be associated with the anchor when using the skip-button for attribute.
 */
export class SkipAnchor extends HTMLElement {

	/**
	 * Hooks up the component.
	 */
	connectedCallback () {
		this.onFocusIn = this.onFocusIn.bind(this);
		this.addEventListener("focusin", this.onFocusIn);
		setAnchor(this, this.id);
	}

	/**
	 * Tears down the component.
	 */
	disconnectedCallback () {
		this.removeEventListener("focusin", this.onFocusIn);
		removeAnchor(this.id);
	}

	/**
	 * Focuses the component.
	 */
	focus () {
		this.tabIndex = 0;
		super.focus();
	}

	/**
	 * Handles the focus in event.
	 */
	private onFocusIn () {
			this.tabIndex = -1;

			// Focus the next element if possible
			const $next = this.nextElementSibling as HTMLElement | null;
			if ($next != null) {
				$next.focus();
			}
	}
}

customElements.define("skip-anchor", SkipAnchor);

declare global {
	interface HTMLElementTagNameMap {
		"skip-anchor": SkipAnchor;
	}
}
