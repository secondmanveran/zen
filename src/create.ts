import type { App } from 'vue'
import type { ColorLibrary } from './composables/colors'
import {
  injectColorsKey,
  injectIconsKey,
  injectThemeKey
} from './composables/keys'

export type SerenityUIOptions = {
  prefix?: string
  components?: any
  colors?: ColorLibrary
  icons?: any
  theme?: any
}

const defaultOptions: SerenityUIOptions = {
  prefix: 'X'
}

const create = (createOptions: SerenityUIOptions = {}) => {
  const install = (app: App, installOptions: SerenityUIOptions = {}) => {
    const options = {
      ...defaultOptions,
      ...createOptions,
      ...installOptions
    }

    if (options.components) {
      Object.keys(options.components).forEach(key => {
        app.component(
          key,
          options.components[key as keyof typeof options.components]
        )
      })
    }

    app.provide(injectColorsKey, options.colors)
    app.provide(injectIconsKey, options.icons || {})
    app.provide(injectThemeKey, options.theme || {})
  }

  return {
    install
  }
}

export default create
