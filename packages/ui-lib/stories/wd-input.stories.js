import { html } from 'lit-html';
import '../src/components/wd-input/WdInput';

export default {
  title: 'wd-input',
};

export const Heading = () => html`<wd-input />`;

export const SettingProperties = () => html`<wd-input type="email" label="email">
<p slot="errorMsg" class="error-msg" >Ha ocurrido un error</p></wd-input>`;

export const Events = () => html`
  <button @click=${ev => console.log('clicked button')}>
    clicking will get logged to console
  </button>
`;

export const WithFunction = () => {
  const header = 'My Header';
  return html` <h1>${header}</h1> `;
};
