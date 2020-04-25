import { html, css, LitElement, customElement, property } from 'lit-element';

@customElement('wd-button')
export class WdButton extends LitElement {

  @property({ type: Number }) counter = 5;
  @property({ type: String }) title = "Hey there";


  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--wd-button-text-color, #000);
      }
    `;
  }

  constructor() {
    super();
  }

  __increment() {
    this.counter++;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
