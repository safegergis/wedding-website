<script setup lang="ts">
const { sections, activeId, goTo } = useBook()

const itemEls = ref<HTMLElement[]>([])

// Keep the current chapter in view on a phone, where the strip scrolls.
watch(activeId, () => {
  nextTick(() => {
    const index = sections.findIndex(section => section.id === activeId.value)
    itemEls.value[index]?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' })
  })
})
</script>

<template>
  <div class="contents-bar">
    <nav class="toc" aria-label="Contents">
      <button
        v-for="section in sections"
        :key="section.id"
        :ref="el => { if (el) itemEls[sections.indexOf(section)] = el as HTMLElement }"
        type="button"
        class="toc-item"
        :aria-current="section.id === activeId ? 'page' : undefined"
        @click="goTo(section.id)"
      >
        <span class="toc-numeral" aria-hidden="true">{{ section.numeral ?? '·' }}</span>
        <span class="toc-label">{{ section.label }}</span>
      </button>
    </nav>
  </div>
</template>
