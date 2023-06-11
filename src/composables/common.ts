import type { PropType } from 'vue'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined

export const useCommon = () => {}

const validators = Object.freeze({
  size: ['xs', 'sm', 'md', 'lg', 'xl']
})

useCommon.props = () =>
  ({
    size: {
      type: String as PropType<Size>,
      default: 'md',
      validator: (value: Size) => {
        if (value === undefined) {
          return true
        }

        const sizes = validators.size
        return sizes.includes(value)
      }
    }
  } as const)

useCommon.validators = () => ({
  ...validators
})
