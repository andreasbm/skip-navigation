import { focusAnchor } from "./util";
import styles from "skip-button.scss";

/**
 * Template for the skip button component.
 */
const template = document.createElement("template");
template.innerHTML = `
	<style>${styles}</style>
	<button><slot>Skip to main content</slot></button>
`;

/**
 * Button that skips to an anchor.
 * @slot - Text to the user. Defaults to "Skip to main content"
 * @attr for - ID of the anchor that should be navigated to. Optional.
 * @cssprop --skip-button-bg - Background.
 * @cssprop --skip-button-color - Foreground.
 * @cssprop --skip-button-padding - Padding.
 * @cssprop --skip-button-font-size - Font size.
 * @cssprop --skip-button-border-radius - Border radius.
 * @cssprop --skip-button-transition - Transition.
 */
export class SkipButton extends HTMLElement {

	/**
	 * Attaches the shadow root.
	 */
	constructor () {
		super();
		const shadow = this.attachShadow({mode: "open"});
		shadow.appendChild(template.content.cloneNode(true));
	}

	/**
	 * Hooks up the component.
	 */
	connectedCallback () {
		this.focusAnchor = this.focusAnchor.bind(this);
		this.addEventListener("click", this.focusAnchor);
	}

	/**
	 * Tears down the component.
	 */
	disconnectedCallback () {
		this.removeEventListener("click", this.focusAnchor);
	}

	/**
	 * Focuses the anchor.
	 */
	focusAnchor () {
		focusAnchor(this.getAttribute("for"));
	}
}

customElements.define("skip-button", SkipButton);