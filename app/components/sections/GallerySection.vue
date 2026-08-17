<script setup lang="ts">
// Plates in a book are numbered and captioned; these follow the same rule,
// so each slot says what photograph belongs in it.
const plates = [
  { numeral: 'II', caption: '[Placeholder: caption]' },
  { numeral: 'III', caption: '[Placeholder: caption]' },
  { numeral: 'IV', caption: '[Placeholder: caption]' },
  { numeral: 'V', caption: '[Placeholder: caption]' },
]
</script>

<template>
  <BookSpread heading="Photographs">
    <template #plate>
      <figure class="w-full max-w-[13rem] lg:max-w-[20rem]">
        <div class="plate-slot aspect-[5/4] w-full">Photograph</div>
        <figcaption class="plate-caption mt-2.5">
          Plate I · [Placeholder: caption]
        </figcaption>
      </figure>
    </template>

    <div class="grid grid-cols-2 gap-x-3 gap-y-4">
      <figure v-for="plate in plates" :key="plate.numeral">
        <div class="plate-slot aspect-square w-full">Photograph</div>
        <figcaption class="plate-caption mt-2">
          Plate {{ plate.numeral }} · {{ plate.caption }}
        </figcaption>
      </figure>
    </div>

    <p class="mt-6 text-sm text-blush-500 italic">
      [Placeholder: more photographs will be added here after the wedding.]
    </p>
  </BookSpread>
</template>
