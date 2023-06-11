<script setup lang="ts">
import { useSlots } from 'vue'

defineOptions({
  name: 'XTableHead'
})

const slots = useSlots()
</script>
<template>
  <thead class="align-bottom">
    <tr class="text-sm text-gray-600 dark:text-gray-400 border-b">
      <slot />
    </tr>
  </thead>
</template>
