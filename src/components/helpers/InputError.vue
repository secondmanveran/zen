<script setup lang="ts">
defineOptions({
  name: 'InputError'
})

const props = defineProps<{
  error: String
  helper: String
}>()
</script>
<template>
  <p v-if="props.error" class="text-sm text-red-500 dark:text-red-400 mt-1">
    {{ error }}
  </p>
  <p v-if="props.helper" class="text-sm text-gray-500 dark:text-gray-400 mt-1">
    {{ helper }}
  </p>
</template>
