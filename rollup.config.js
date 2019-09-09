import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

const extra = {
  globals: {vue: 'Vue'}
}

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/vue-component.js', name: 'vueComponent', format: 'umd', ...extra },
    { file: 'dist/vue-component.min.js', name: 'vueComponent', format: 'umd', ...extra },
    { file: 'dist/vue-component.common.js', name: 'vueComponent', format: 'cjs', ...extra },
    { file: 'dist/vue-component.esm.js', format: 'es', ...extra }
  ],
  external: [ 'vue' ],
  plugins: [
    commonjs(),
    resolve(),
    vue(),
    typescript({
      objectHashIgnoreUnknownHack: true,
      useTsconfigDeclarationDir: true
    }),
    terser({
      sourcemap: false,
      include: [/^.+\.min\.js$/]
    })
  ]
}
