import {
  fileURLToPath,
} from 'node:url';

const rootAlias = () => ({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
});

export default rootAlias;
