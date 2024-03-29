<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useCommon } from '@/composables/common'
import { useColors } from '@/composables/colors'
import { useTheme } from '@/composables/theme'
import { avatarIcon } from '@/common/icons'
import XIcon from '@/components/icon/Icon.vue'
import theme from './Avatar.theme'

defineOptions({
  name: 'XAvatar'
})

const props = defineProps({
  ...useCommon.props(),
  ...useColors.props('primary'),
  tag: {
    type: String,
    default: 'div'
  },
  name: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  outlined: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  }
})

const source = ref<string>()
const initials = computed(() => {
  if (props.name) {
    const initials = props.name.match(/\b\w/g) || []

    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
  }

  return ''
})

if (typeof window !== 'undefined' && Image) {
  watch(
    () => props.image,
    src => {
      source.value = undefined
      if (!src) return
      const img = new Image()

      img.onload = () => {
        source.value = props.image
      }
      img.onerror = () => {}
      img.src = src
    },
    {
      immediate: true
    }
  )
}

const { styles, classes, className } = useTheme('avatar', theme, props, {
  source
})
</script>

<template>
  <component
    :is="tag"
    :style="styles"
    :class="[className, $style.avatar, classes.wrapper]">
    <img v-if="source" :alt="alt" :src="image" class="h-full w-full" />

    <span v-else-if="name" class="leading-none">{{ initials }}</span>

    <slot v-else-if="!name" name="avatarIcon">
      <x-icon :size="size" :icon="avatarIcon" />
    </slot>
  </component>
</template>

<style lang="postcss" module>
.avatar {
  color: var(--x-avatar-text);
  background-color: var(--x-avatar-bg);
  border-color: var(--x-avatar-border);

  :global(.dark) &,
  &:global(.dark) {
    color: var(--x-avatar-dark-text, var(--x-avatar-text));
    background-color: var(--x-avatar-dark-bg, var(--x-avatar-bg));
    border-color: var(--x-avatar-dark-border, var(--x-avatar-border));
  }
}
</style>
