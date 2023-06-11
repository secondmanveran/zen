<script setup lang="ts">
import { useTheme } from '@/composables/theme'
import theme from './TableCell.theme'

defineOptions({
  name: 'XTableCell'
})

const props = defineProps({
  textAlign: {
    type: String,
    validator: (value: string) => {
      const textAlignment = [null, 'left', 'center', 'right', 'justify']
      return textAlignment.includes(value)
    }
  },
  truncate: Boolean,
  dense: Boolean,
  fixed: Boolean,
  verticalAlign: {
    type: String,
    default: 'middle',
    validator: (value: string) => {
      const verticalAlignment = [
        null,
        'baseline',
        'bottom',
        'middle',
        'text-bottom',
        'text-top',
        'top'
      ]
      return verticalAlignment.includes(value)
    }
  }
})

if (props.truncate && !props.fixed) {
  console.warn(
    'Table must have "fixed" property set to true when using TableCell "truncate" property'
  )
}

const { styles, classes, className } = useTheme('table-cell', theme, props)
</script>

<template>
  <td :style="styles" :class="[className, classes.wrapper]">
    <slot></slot>
  </td>
</template>
