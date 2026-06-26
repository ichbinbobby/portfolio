<script setup lang="ts">
defineProps<{
  links: { label: string, to: string }[]
}>()
</script>

<template>
  <header class="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-fit">
    <div class="flex items-center gap-1 bg-muted/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-sm border border-default">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="px-3 py-1.5 text-sm text-muted hover:text-highlighted rounded-full transition-colors"
        active-class="text-highlighted bg-elevated"
      >
        {{ link.label }}
      </NuxtLink>
      <UColorModeButton
        size="sm"
        color="neutral"
        variant="ghost"
      />
    </div>
  </header>
</template>
