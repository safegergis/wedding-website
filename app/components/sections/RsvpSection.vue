<template>
  <BookSpread heading="RSVP">
    <template #plate>
      <p class="script max-w-[16rem]">Will you join us?</p>
      <DecoRule />
      <p class="label-sm">Kindly reply by</p>
      <p class="text-blush-800">September 27th, 2026</p>
    </template>

    <div class="flex h-full flex-col items-start">
      <div class="prose-lit text-ink">
        <p class="dropcap">
          Replies go through our Zola page, where you can say yes or no for everyone named
          on your invitation.
        </p>
        <p>
          Changed your mind, or your plans? Reply again with the same link. The latest
          answer is the one that counts.
        </p>
                <p>Kindly RSVP by September 27th. If we don't receive your response by the deadline, we'll unfortunately have to mark you as unable to attend. </p>
      </div>

      <a
        :href="RSVP_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-seal deco-cut mt-7"
      >
        Reply on Zola
      </a>

      <p class="mt-3 text-sm text-blush-500">Opens in a new tab.</p>
    </div>
  </BookSpread>
</template>
