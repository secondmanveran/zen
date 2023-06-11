import * as components from './components'
import create, { type SerenityUIOptions } from './create'
import type { App, Component } from 'vue'

type ComponentType = Component
type CreateReturnType = {
  install: (app: App, options?: SerenityUIOptions) => void
}

const componentList: { [key: string]: ComponentType } = components

export default create({
  components: componentList
}) as CreateReturnType
