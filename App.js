import StorybookUI from './storybook';

import Root from './src/components/Root';

module.exports = process.env.REACT_NATIVE_STORYBOOK ? StorybookUI : Root;
