<script setup lang="ts">
import storyPhoto from '~/assets/img/ourstory.jpg'
</script>

<template>
  <BookSpread heading="Our Story" plate-bleed>
    <template #plate>
      <img
        :src="storyPhoto"
        alt="Merola and Safe close together in lamplight, her hand resting on a shelf of old books"
        class="plate-photo plate-photo--bleed"
        width="6400"
        height="8000"
      >
    </template>

    <div class="prose-lit text-ink">
      <p class="dropcap">
        We met as children, before either of us had any say in it. Our families were
        friends, so we were put in the same rooms at the same gatherings year after year,
        and somewhere in there, without any ceremony at all, it happened. Love at first
        sight is a phrase people use lightly. We are not using it lightly.
      </p>

      <p>
        <span class="run-in">The long way round.</span>
        Then Merola moved, and for years we saw each other only now and then: a holiday
        here, a family visit there. The crush never had the decency to fade. Safe spent
        that whole stretch quietly certain of one thing, that this was the girl he was
        going to marry. College put real distance between us, and we decided the distance
        did not get a vote. We came out the other side surer than we went in, with
        something worth celebrating.
      </p>

      <p>
        <span class="run-in">The proposal.</span>
        Safe asked in Laguna Beach, with the water carrying on behind us the way it always
        has. She said yes. Everything up to that point, every shared room and every long
        drive, turned out to be the opening chapter of a much longer love story.
      </p>

      <p>
        <span class="run-in">What comes next.</span>
        On the twenty-second of November we will say the rest of it out loud, in front of
        the people who have known us since before we knew each other. That is the part we
        cannot wait for: not the day itself so much as the room it happens in, and every
        face in it.
      </p>

      <DecoRule class="mt-8" />
    </div>
  </BookSpread>
</template>
