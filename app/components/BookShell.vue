<script setup lang="ts">
import type { Component } from 'vue'
import type { SectionId } from '~/composables/useBook'
import CoverSection from '~/components/sections/CoverSection.vue'
import OurStorySection from '~/components/sections/OurStorySection.vue'
import DetailsSection from '~/components/sections/DetailsSection.vue'
import QandASection from '~/components/sections/QandASection.vue'
import ScheduleSection from '~/components/sections/ScheduleSection.vue'
import TravelSection from '~/components/sections/TravelSection.vue'
import RsvpSection from '~/components/sections/RsvpSection.vue'
import GallerySection from '~/components/sections/GallerySection.vue'

const {
  sections,
  activeId,
  activeIndex,
  activeSection,
  direction,
  canGoBack,
  canGoOn,
  next,
  prev,
} = useBook()

const componentMap: Record<SectionId, Component> = {
  cover: CoverSection,
  story: OurStorySection,
  details: DetailsSection,
  qa: QandASection,
  schedule: ScheduleSection,
  travel: TravelSection,
  rsvp: RsvpSection,
  gallery: GallerySection,
}

const previousSection = computed(() => (canGoBack.value ? sections[activeIndex.value - 1]! : null))
const nextSection = computed(() => (canGoOn.value ? sections[activeIndex.value + 1]! : null))

/** Announced on turn, since the content swaps without a navigation. */
const announcement = computed(() => {
  const { numeral, label } = activeSection.value
  return numeral ? `Chapter ${numeral}, ${label}` : label
})

const bookEl = ref<HTMLElement | null>(null)

// A turn on a phone should put you at the top of the new page.
watch(activeId, () => {
  nextTick(() => {
    if (window.scrollY > 0) bookEl.value?.scrollIntoView({ block: 'start' })
  })
})

function onKeydown(event: KeyboardEvent) {
  if (event.metaKey || event.ctrlKey || event.altKey) return
  const target = event.target as HTMLElement | null
  if (target?.closest('input, textarea, select, [contenteditable]')) return

  if (event.key === 'ArrowRight') next()
  else if (event.key === 'ArrowLeft') prev()
}

// Swipe to turn, the primary gesture on a phone.
let touchStartX = 0
let touchStartY = 0
let swiping = false

function onTouchStart(event: TouchEvent) {
  if (event.touches.length !== 1) return
  const touch = event.touches[0]!
  touchStartX = touch.clientX
  touchStartY = touch.clientY
  swiping = true
}

function onTouchEnd(event: TouchEvent) {
  if (!swiping) return
  swiping = false
  const touch = event.changedTouches[0]
  if (!touch) return

  const dx = touch.clientX - touchStartX
  const dy = touch.clientY - touchStartY
  // Horizontal intent only, so it never fights the page scroll.
  if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy) * 1.6) return

  if (dx < 0) next()
  else prev()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="book-room">
    <SectionNav />

    <div
      ref="bookEl"
      class="book"
      :style="{
        '--leaves-read': activeIndex,
        '--leaves-left': sections.length - 1 - activeIndex,
      }"
    >
      <div class="book-body">
        <div class="book-edge book-edge--left" aria-hidden="true" />
        <div
          class="book-block"
          @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd"
        >
          <!-- Durations are declared rather than sniffed: the turn animation
               lives on the leaf's children, which Vue cannot measure. -->
          <Transition :name="`turn-${direction}`" :duration="{ enter: 640, leave: 640 }">
            <component :is="componentMap[activeId]" :key="activeId" />
          </Transition>
        </div>
        <div class="book-edge book-edge--right" aria-hidden="true" />
      </div>
    </div>

    <p aria-live="polite" class="sr-only">{{ announcement }}</p>

    <div class="turnbar-dock">
      <nav class="turnbar" aria-label="Turn the page">
        <button type="button" class="turn" :disabled="!canGoBack" @click="prev">
          <span aria-hidden="true">‹</span>
          <span>{{ previousSection?.label ?? 'Back' }}</span>
        </button>

        <p class="turn-hint">
          {{ activeSection.numeral ? `Chapter ${activeSection.numeral}` : 'Title Page' }}
        </p>

        <button type="button" class="turn turn--next" :disabled="!canGoOn" @click="next">
          <span>{{ nextSection?.label ?? 'The End' }}</span>
          <span aria-hidden="true">›</span>
        </button>
      </nav>
    </div>
  </div>
</template>
