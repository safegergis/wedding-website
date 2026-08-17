<script setup lang="ts">
import schedulePhoto from '~/assets/img/schedule.jpg'

// Three hours, in order. Venue names come from VENUES so they cannot drift
// from the Details plate; the ceremony hour comes from there too, since the
// Details plate prints the same one.
const ceremony = VENUES[0]!
const reception = VENUES[1]!

const stops = [
  { time: ceremony.time, event: 'The ceremony', where: ceremony.name },
  { time: '4:00 pm', event: 'Cocktail hour', where: reception.name },
  { time: '5:00 pm', event: 'The reception', where: `Dinner and dancing, ${reception.name}` },
]
</script>

<template>
  <BookSpread heading="The Order of the Day" plate-bleed>
    <template #plate>
      <img
        :src="schedulePhoto"
        alt="Merola and Safe walking hand in hand through a bookshop aisle, a red bow in her hair"
        class="plate-photo plate-photo--bleed"
        width="4972"
        height="6215"
      >
    </template>

    <ol class="itinerary-stops mt-2">
      <li v-for="stop in stops" :key="stop.event" class="itinerary-stop">
        <p class="itinerary-time">{{ stop.time }}</p>
        <p class="itinerary-event">{{ stop.event }}</p>
        <p class="itinerary-note">{{ stop.where }}</p>
      </li>
    </ol>
  </BookSpread>
</template>
