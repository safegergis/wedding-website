<script setup lang="ts">
import travelPhoto from '~/assets/img/travel.jpg'
</script>

<template>
  <BookSpread heading="Travel" plate-bleed>
    <template #plate>
      <img
        :src="travelPhoto"
        alt="Merola and Safe leaning together over a crate of records, both looking down at what she has found"
        class="plate-photo plate-photo--bleed"
        width="1120"
        height="1400"
      >
    </template>

    <div class="prose-lit text-ink">
      <p class="dropcap">
        One Sunday, two places. The ceremony is at Archangel Michael Coptic Orthodox Church
        in Santa Ana, and the reception follows inland at Dove Canyon Golf Club in Trabuco
        Canyon. Both addresses, with their map links, are printed back in The Details.
      </p>

      <p>
        <span class="run-in">Getting there.</span>
        Fly into John Wayne Airport (SNA) in Santa Ana, the closest field to both the church
        and the reception. Los Angeles International (LAX) is the larger alternative, about
        an hour up the freeway when it is behaving.
      </p>

      <p>
        <span class="run-in">Church to reception.</span>
        The two are not next door: the church is in Santa Ana and the reception is inland at
        Trabuco Canyon, about forty-five minutes by car. The ceremony begins at one
        o'clock and cocktails open at four, so there is room in the afternoon to make the
        drive without hurrying.
      </p>

      <p>
        <span class="run-in">Making a weekend of it.</span>
        Orange County is worth an extra day. Disneyland and California Adventure are twenty
        minutes north in Anaheim. The coast is the other direction: Laguna Beach for the
        coves and the galleries along Pacific Coast Highway, Newport Beach for the harbour
        and the ferry across to Balboa Island. Closer in, Old Towne Orange is a square of
        antique shops and cafes, about ten minutes from the church.
      </p>
    </div>
  </BookSpread>
</template>
