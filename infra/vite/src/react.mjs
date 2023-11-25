import deepmerge from 'deepmerge';
import {
  defineConfig,
} from 'vite';

import reactPlugin from './subconfigs/react-plugin.mjs';
import rootAlias from './subconfigs/root-alias.mjs';

const config = deepmerge(reactPlugin(), rootAlias());

export default defineConfig(config);

