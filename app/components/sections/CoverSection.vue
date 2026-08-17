<script setup lang="ts">
import heroPhoto from '~/assets/img/hero.jpg'
</script>

<!-- The title page, faced by the hero photograph as a frontispiece.
     Set as a book sets a title page: a title block floating in the optical
     centre, and the particulars as an imprint at the foot of the leaf.
     Keep the root element the only node in this template: a stray comment
     makes the component a fragment, and <Transition> then silently skips
     the page turn. -->
<template>
  <BookSpread plate-bleed>
    <template #plate>
      <img
        :src="heroPhoto"
        alt="Merola and Safe in a bookshop, each holding an open book up over their face"
        class="plate-photo plate-photo--bleed"
        width="6400"
        height="5975"
      >
    </template>

    <div class="flex h-full flex-col items-center justify-between pt-2 pb-6 text-center lg:pt-4">
      <!-- Title block. my-auto centres it in whatever the imprint leaves. -->
      <div class="my-auto flex flex-col items-center">
        <p class="text-[0.92rem] text-blush-500 italic">Together with their families</p>

        <p class="parents mt-1">
          <span class="block">Nabih &amp; Nermeen Ibrahim</span>
          <span class="block">Basim &amp; Nermina Gergis</span>
        </p>

        <!-- The pediment crowns the names, so it sits between the credit
             line and the names rather than above the whole block. It is
             also the only ornament on this leaf. -->
        <DecoPediment class="mt-5 lg:mt-8" />

        <h1 class="mt-3 font-display text-[clamp(2.5rem,12vw,4.5rem)] leading-[1.02] text-blush-800 lg:mt-4">
          Merola
          <span class="script my-1 block text-[0.42em] leading-none text-blush-500">and</span>
          Safe
        </h1>

        <p class="mt-4 text-blush-700 italic lg:mt-6">invite you to their wedding</p>
      </div>

      <!-- Imprint: where and when, then the one action, anchored at the foot. -->
      <div class="mt-8 flex flex-col items-center lg:mt-10">
        <p class="label-sm text-blush-600">Sunday · November 22, 2026</p>
        <p class="mt-1.5 text-blush-700">Orange County, California</p>

        <a
          :href="RSVP_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-seal deco-cut mt-6 lg:mt-8"
        >
          RSVP
        </a>
      </div>
    </div>
  </BookSpread>
</template>
