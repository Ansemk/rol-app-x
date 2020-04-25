```js script
import { html } from '@open-wc/demoing-storybook';
import '../wd-button.js';

export default {
  title: 'WdButton',
  component: 'wd-button',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# WdButton

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add wd-button
```

```js
import 'ui-lib/wd-button.js';
```

```js preview-story
export const Simple = () => html`
  <wd-button></wd-button>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <wd-button title="Hello World"></wd-button>
`;
```
