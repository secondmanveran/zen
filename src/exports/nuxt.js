import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'

export default defineNuxtModule({
  meta: {
    name: '@jetstreamlabs/zen',
    configKey: 'jetstreamlabs',
    compatibility: {
      nuxt: '^3.0.0-rc.1'
    }
  },
  defaults: {
    prefix: 'X'
  },
  async setup(options, nuxt) {
    // Create resolver to resolve relative paths
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.serenityOptions = options

    // plugin install
    addPlugin(resolve('./nuxt.plugin.js'))

    // nuxt install
    nuxt.hook('components:dirs', dirs => {
      dirs.push({
        path: fileURLToPath(new URL('../src/components', import.meta.url)),
        extensions: ['vue', 'tsx'],
        prefix: options?.prefix ? options?.prefix : 'X'
      })
    })
  }
})
