import { readFile } from 'node:fs/promises'
import { basename } from 'node:path'
import { transform } from 'lightningcss'
import { defineConfig } from 'tsdown'

const id = 'deepseek-plugin-store'
const cssPrefix = '\0plugin-store-css:'
const cssSuffix = '.mjs'
const external = [
  'react',
  'react/jsx-runtime',
  'react-dom',
  '@deepseek-ai/cordis',
  '@deepseek-ai/dsh-client-runtime/client',
  '@deepseek-ai/dsh-client-ui-sidebar/client',
  '@deepseek-ai/dsh-client-ui-slots',
]

export default defineConfig([
  {
    entry: ['lib/types/index.js'],
    outDir: 'lib',
    format: 'esm',
    platform: 'node',
    target: 'es2024',
    clean: false,
    dts: false,
    outputOptions: {
      entryFileNames: 'index.js',
    },
  },
  {
    entry: { client: 'lib/types/client/index.js' },
    outDir: 'lib',
    format: 'cjs',
    platform: 'browser',
    target: 'es2022',
    clean: false,
    dts: false,
    sourcemap: true,
    external,
    noExternal: (source: string) => external.includes(source) ? undefined : true,
    plugins: [{
      name: 'deepseek-plugin-store-css',
      resolveId(source: string, importer: string | undefined) {
        if (!source.endsWith('.module.css') || importer === undefined) return null
        return `${cssPrefix}${new URL(source, `file://${importer}`).pathname}${cssSuffix}`
      },
      async load(source: string) {
        if (!source.startsWith(cssPrefix) || !source.endsWith(cssSuffix)) return null
        const file = source.slice(cssPrefix.length, -cssSuffix.length).replace('/lib/types/', '/src/')
        const result = transform({
          filename: file,
          code: await readFile(file),
          cssModules: { pattern: '[hash]_[local]' },
          minify: true,
        })
        const classes = Object.fromEntries(Object.entries(result.exports ?? {}).map(([key, value]) => [key, value.name]))
        const tag = `${id}/${basename(file)}`
        return `const css=${JSON.stringify(result.code.toString())};const key=${JSON.stringify(tag)};if(!document.querySelector('style[data-plugin-css='+JSON.stringify(key)+']')){const el=document.createElement('style');el.dataset.plugin=${JSON.stringify(id)};el.dataset.pluginCss=key;el.textContent=css;document.head.appendChild(el)};export default ${JSON.stringify(classes)}`
      },
    }],
    outputOptions: {
      entryFileNames: 'client.js',
      banner: `window.__ModuleLoader__.load({ id: ${JSON.stringify(id)}, factory: (require) => {`,
      footer: 'return module.exports; } });',
      intro: 'var module = { exports: {} }; var exports = module.exports;',
    },
  },
])
