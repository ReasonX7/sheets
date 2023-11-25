import lintStaged from "lint-staged";

export const runLintStaged = async () => {
  await lintStaged({
    allowEmpty: false,
    concurrent: true,
    config: {
      '*.mjs|*.jsx|*.ts|*.tsx': 'eslint',
    },
    debug: true,
    quiet: false,
    relative: false,
    stash: false,
    verbose: true,
  });
};
