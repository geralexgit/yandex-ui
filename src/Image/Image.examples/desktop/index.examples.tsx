import { withKnobs } from '@storybook/addon-knobs';

import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';

export * from './load-error-stub.examples';
export * from './sizes-srcset.examples';
export * from './width-height.examples';
export * from './playground.examples';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: [withKnobs, ...createDecorators({ scope: 'desktop' })],
    parameters,
};
