import { html } from 'lit-html';
import WdInput from '../src/components/wd-input/WdInput'

export default {
  title: 'Demo',
};

export const Heading = () => html`
  <h1>Hello World</h1>
`;

export const SettingProperties = () => html`
  <wd-input .data=${{ header: 'foo', state: true }}>Hello World</wd-input>
`;

export const Events = () => html`
  <button @click=${ev => console.log('clicked button')}>clicking will get logged to console</button>
`;

export const WithFunction = () => {
  const header = 'My Header';
  return html`
    <h1>${header}</h1>
  `;
};
