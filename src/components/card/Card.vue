<script setup lang="ts">
import { useTheme } from '@/composables/theme'
import theme from './Card.theme'

defineOptions({
  name: 'XCard'
})

const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  flat: Boolean
})

const { styles, classes, className } = useTheme('card', theme, props)
</script>

<template>
  <component :is="tag" :class="[className, classes.wrapper]">
    <slot></slot>
  </component>
</template>
