<script setup lang="ts">
/**
 * One spread of the book. Mobile shows a single leaf: the plate band sits
 * above the running text. From 64em the two separate across the gutter,
 * plate on the verso and text on the recto, the way a chapter opening
 * faces its frontispiece in print.
 */
defineProps<{
  /** Chapter title. Omit on the title page, which carries no chapter head. */
  heading?: string
  /**
   * Run the plate to the edges of its leaf: no padding, no gap, the way a
   * tipped-in photographic plate is trimmed flush. Only for a plate whose
   * whole content is one image; anything set in type needs the margin.
   */
  plateBleed?: boolean
}>()

const { activeSection, folios } = useBook()
</script>

<template>
  <section class="spread paper-grain">
    <div class="spread-leaf spread-leaf--plate" :class="{ 'spread-leaf--bleed': plateBleed }">
      <div class="leaf-plate-body flex w-full min-h-0 flex-1 flex-col items-center gap-4">
        <slot name="plate" />
      </div>
      <footer v-if="folios.verso" class="leaf-foot hidden lg:block">
        <DecoRule class="folio-mark" />
        <p class="folio folio--verso">· {{ folios.verso }} ·</p>
      </footer>
    </div>

    <div class="spread-leaf spread-leaf--text">
      <div class="leaf-body">
        <header v-if="heading">
          <p class="chapter-mark">
            <span>Chapter {{ activeSection.numeral }}</span>
          </p>
          <h1 class="chapter-title">{{ heading }}</h1>
        </header>
        <slot />
      </div>
      <footer v-if="folios.recto || activeSection.verse" class="leaf-foot">
        <DecoRule v-if="folios.recto" class="folio-mark" />
        <p v-if="folios.recto" class="folio folio--recto">· {{ folios.recto }} ·</p>
        <p v-if="activeSection.verse" class="folio-verse">
          <span class="folio-verse__line">&ldquo;{{ activeSection.verse.text }}&rdquo;</span>
          <span class="folio-verse__ref">{{ activeSection.verse.ref }}</span>
        </p>
      </footer>
    </div>
  </section>
</template>
