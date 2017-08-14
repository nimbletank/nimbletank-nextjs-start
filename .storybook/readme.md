# Mediacom React Storybook docs

## Reasons for using React Storybook:
* so that component developers can create components in isolation
* so that integration developers can understand how they are used more easily
* so that QA are able to test the various versions/options on a component independently of anything else

## Using React storybook

### Run storybook locally

```sh
npm run storybook
```

### Edit existing stories
All the stories can be found in the `/.storybook/stories` directory. Components are grouped into similar story files e.g. buttons, forms etc.

> Note: in order to use storybook, your components should not make use of webpack's alias functionality. Components which handle redux state cannot also be used.

### New story example
The below snippet should expose all the storybook features that you will need:

```js
import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import JSXAddon from 'storybook-addon-jsx';
import { WithNotes } from '@storybook/addon-notes';
import '../../src/sass/scaffold.scss'; // scaffold is needed so we can inherit our base styles

// Elements

setAddon(JSXAddon);
const stories = storiesOf('Forms', module);
stories.addDecorator(withKnobs);

stories
    .addWithJSX('Form input', () => (
        <div></div>
    ))
```

## Storybook Addons

### Adding editable props (knobs)
* Allows live-editing of props when viewing a component.
* Adds a new tab to the Storybook interface.
* See https://github.com/storybooks/storybook/tree/master/addons/knobs for documention

```js
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, array, object } from '@storybook/addon-knobs';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.add('with a button', () => (
    <button disabled={boolean('Disabled', false)} >
        {text('Label', 'Hello Button')}
    </button>
))
```

### Adding JSX view
* Adds a new tab to the Storybook interface.
* See https://github.com/Kilix/storybook-addon-jsx for documentation

The JSX output is a little buggy but it should help developers work out what is needed when using components.

```js
import { storiesOf, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
setAddon(JSXAddon);

const stories = storiesOf('test', module);
stories.addDecorator(withKnobs);
stories
    // .addWithJSX instead of .add()
    .addWithJSX('Paris', () => (
        <Test fontSize={45} fontFamily="Roboto" align="center" color="#CAF200">
            Hello
        </Test>
    ))
```

### Adding notes/readme info
* Adds a new 'README' tab to the Storybook interface.
* See https://github.com/tuchk4/storybook-readme for documentation

```js
import withReadme from 'storybook-readme/with-readme';

// import your component
import * as Icons from '/components/common/Icons';
import IconButton from '/components/common/IconButton';

// import the readme
import IconButtonReadMe from '/components/common/IconButton.md';

...
...

.addWithJSX('Icon button', withReadme(IconButtonReadMe, () => (
        <IconButton
            label={text('Label', 'Edit Statement')}
            svgIcon={Icons.IconEdit}
            background={boolean('Background', true)}
            iconSize={number('Icon Size', 14)}
            labelPosition={text('Label Position', 'right')} />
    )))
```

### Adding Actions
* Adds a new tab to the Storybook interface.
* See https://github.com/storybooks/storybook/tree/master/addons/actions for documention

```js
import { action } from '@storybook/addon-actions';

import Button from './button';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories
    .addWithJSX('default button', () => (
        <Button onClick={ action('button-click') }>
            Hello World!
        </Button>
    ))
```

### Adding notes
* Adds a new tab to the Storybook interface.
* See https://github.com/storybooks/storybook/tree/master/addons/notes for documention

```js
import React from 'react';

import { storiesOf } from '@storybook/react';
import { WithNotes } from '@storybook/addon-notes';

import Component from './Component';

const stories = storiesOf('Component', module);
stories.addDecorator(withKnobs);
stories
    .addWithJSX('with some emoji', () => (
        <WithNotes notes={'A very simple component'}>
            <Component></Component>
        </WithNotes>
    ), { skip: 1 }); // `skip: 1` ignore the first child wrapper.
```

### Adding Accessibility checks
* Adds a new `A11y` tab to the Storybook interface.
* See https://github.com/storybooks/storybook-addon-a11y for documention

```js
import React from 'react';

import { storiesOf } from '@storybook/react';
import { WithNotes } from '@storybook/addon-notes';

import Component from './Component';

const stories = storiesOf('test', module);
stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories
    .addWithJSX('with some emoji', () => (
        <Component>Foo</Component>
    ));
```
