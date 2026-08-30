<script setup lang="ts">
import type { GalleryPlate } from '~/utils/gallery'

// Plates in a book are numbered; Plate I fronts the chapter on the verso and
// the rest run as a numbered grid on the recto. The URLs come from the same
// modifier constants app.vue registers at generate time; see utils/gallery.ts.
const img = useImage()

const [feature, ...plates] = GALLERY_PLATES

const featureSrc = img(feature!.src, GALLERY_FEATURE_MODIFIERS)
const tileSrc = (plate: GalleryPlate) => img(plate.src, GALLERY_TILE_MODIFIERS)
</script>

<template>
  <BookSpread heading="Photographs">
    <template #plate>
      <figure class="w-full max-w-[13rem] lg:max-w-[20rem]">
        <img
          :src="featureSrc"
          class="plate-photo w-full"
          width="800"
          height="1000"
          alt="Merola and Safe, engagement photograph"
        >
        <figcaption class="plate-caption mt-2.5">Plate I</figcaption>
      </figure>
    </template>

    <div class="grid grid-cols-2 gap-x-3 gap-y-4">
      <figure v-for="plate in plates" :key="plate.numeral">
        <img
          :src="tileSrc(plate)"
          class="plate-photo aspect-square w-full object-cover"
          width="560"
          height="560"
          loading="lazy"
          :alt="`Engagement photograph, plate ${plate.numeral}`"
        >
        <figcaption class="plate-caption mt-2">Plate {{ plate.numeral }}</figcaption>
      </figure>
    </div>

    <p class="mt-6 text-sm text-blush-500 italic">
      [Placeholder: more photographs will be added here after the wedding.]
    </p>
  </BookSpread>
</template>
