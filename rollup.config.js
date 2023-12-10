'use strict';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import clear from 'rollup-plugin-clear';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/main.ts',
  output: {
    file: 'C:\\Users\\adrig\\AppData\\Local\\Screeps\\scripts\\screeps.com\\default\\main.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    clear({ targets: ['dist'] }),
    resolve({ rootDir: 'src' }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
  ]
};
