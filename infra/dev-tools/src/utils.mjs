import { readFile } from 'fs/promises';

export const readJson = (location) => readFile(location)
  .then(buf => buf.toString())
  .then(str => JSON.parse(str));
