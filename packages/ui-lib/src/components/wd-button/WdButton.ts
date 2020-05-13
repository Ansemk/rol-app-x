import { html, css, LitElement, customElement, property, unsafeCSS } from 'lit-element';
let WdButtonStyle = require('./WdButton.scss');


@customElement('wd-button')
export class WdButton extends LitElement {

  @property({ type: Number }) counter = 5;
  @property({ type: String }) title = "Hey there";


  static get styles() {
    return css`${unsafeCSS(WdButtonStyle)} `;
  }

  constructor() {
    super();
  }

  __increment() {
    this.counter++;
  }

  render() {
    return html`
      <h2>${this.title} OJO. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}

