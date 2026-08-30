<script setup lang="ts">
import churchArt from '~/assets/img/church.webp'
import clubArt from '~/assets/img/venue.webp'

// One watercolour per place, keyed off the same VENUES order the addresses
// print in, so a venue and its illustration cannot come apart.
const art = [
  {
    src: churchArt,
    alt: 'Watercolour of the church: tiered arches over the entrance, palms on either side',
    width: 1100,
    height: 733,
  },
  {
    src: clubArt,
    alt: 'Watercolour of the clubhouse: a timber pavilion with stone columns and open doors',
    width: 1100,
    height: 786,
  },
]

// The facts every guest looks for first, so nobody has to read a chapter to
// find them. The hours print on the plate beside each place; what is left
// here is everything that is true of the whole day.
const particulars = [
  { term: 'Date', lines: ['Sunday, November 22, 2026 at 1:00pm'] },
  { term: 'Dress', lines: ['We kindly ask that all guests wear formal attire. Elegant dresses, suits, and ties are encouraged.'] },
  { term: 'Reply by', lines: ['Wednesday, October 7th, 2026'] },
]
</script>

<template>
  <BookSpread heading="The Details">
    <template #plate>
      <div class="flex w-full max-w-[20rem] flex-col gap-6">
        <address
          v-for="(venue, i) in VENUES"
          :key="venue.label"
          class="text-center text-blush-700 not-italic"
        >
          <img
            :src="art[i]!.src"
            :alt="art[i]!.alt"
            :width="art[i]!.width"
            :height="art[i]!.height"
            class="plate-art mx-auto mb-2 w-full max-w-[12rem] lg:max-w-[16rem]"
          >
          <span class="label-sm block text-blush-500">{{ venue.label }} · {{ venue.time }}</span>
          <span class="mt-1 block">{{ venue.name }}</span>
          <span class="block">{{ venue.street }}</span>
          <span class="block">{{ venue.locality }}</span>
          <a
            class="btn-quiet"
            :href="mapsUrl(venue)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Open in Maps</span>
            <span aria-hidden="true">↗</span>
          </a>
        </address>
      </div>
    </template>

    <div class="prose-lit text-ink">
      <p class="dropcap">
        One Sunday, two places, and a single afternoon between them. The ceremony begins at
        one o'clock at Archangel Michael Coptic Orthodox Church in Santa Ana, and the
        evening carries on inland at Dove Canyon Golf Club, where cocktails open at four.
        Both addresses carry a map link, so tap either one and your phone will do the rest.
      </p>
    </div>

    <dl class="mt-6 space-y-3">
      <div v-for="item in particulars" :key="item.term" class="border-b border-blush-200 pb-2.5">
        <dt class="label-sm">{{ item.term }}</dt>
        <dd class="text-blush-800">
          <span v-for="line in item.lines" :key="line" class="block">{{ line }}</span>
        </dd>
      </div>
    </dl>

  </BookSpread>
</template>
