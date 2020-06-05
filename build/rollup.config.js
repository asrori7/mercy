import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import buble from '@rollup/plugin-buble';
// import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/wrapper.js',
  output: {
    name: 'MercyButton',
    exports: 'named',
    sourcemap: false,
  },
  plugins: [
    commonjs(),
    vue({
      css: true,
      compileTemplate: true,
    }),
    buble(),
    // uglify()
  ],
};