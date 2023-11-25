import deepmerge from 'deepmerge';
import {
  defineConfig,
} from 'vite';

import rootAlias from './subconfigs/root-alias.mjs';

const config = deepmerge(rootAlias());

export default defineConfig(config);

