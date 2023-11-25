#!/usr/bin/env node

import {
  Command,
} from 'commander';
import { runLintStaged } from "./commands.mjs";
import {readJson} from "../utils.mjs";
import {findUp} from "find-up";

const packageFile = await findUp('package.json', { cwd: import.meta.url });
const packageInfo = await readJson(packageFile);

const program = new Command();

program
  .name('sxl')
  .description('A bundle of development tools for quick and compact setup.')
  .version(packageInfo.version);


program
  .command('lint')
  .description('Runs code error checks and performs code style enforcement.')
  .action(() => runLintStaged());

program.parse();
