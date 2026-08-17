<script setup lang="ts">
const { unlock, error } = useAuth()
const password = ref('')

function submit() {
  unlock(password.value)
}
</script>

<template>
  <!-- The closed cover. Everything here is one leaf, front side. -->
  <div class="flex min-h-dvh flex-col justify-center bg-[radial-gradient(115%_70%_at_50%_0%,#fbf1ec_0%,#f4e3dd_55%,#ecd6cf_100%)] px-4 py-10">
    <form
      class="paper-grain relative mx-auto w-full max-w-md bg-blush-50 px-6 py-10 text-center shadow-[0_1px_2px_rgb(94_29_34/0.08),0_14px_34px_-18px_rgb(46_17_19/0.32)] sm:px-10 sm:py-12"
      @submit.prevent="submit"
    >
      <!-- Cover rule, the way a bound cover is blind-stamped. -->
      <div class="deco-plate" aria-hidden="true" />

      <!-- No illustration here: the cover is closed, and the watercolour is
           the first thing you see when it opens. -->
      <div class="relative">
        <p class="script">You are invited</p>
        <p class="label-sm mt-2 text-blush-500">to the wedding of</p>

        <h1 class="mt-3 font-display text-[clamp(1.6rem,7vw,2.15rem)] leading-tight text-blush-800">
          Merola &amp; Safe
        </h1>

        <DecoRule class="mt-5 mb-6" />

        <label class="label-sm block text-blush-500" for="gate-password">
          The word from your invitation
        </label>

        <input
          id="gate-password"
          v-model="password"
          type="text"
          name="wedding-password"
          autocomplete="off"
          autocapitalize="none"
          autocorrect="off"
          spellcheck="false"
          enterkeyhint="go"
          class="mt-2 mb-6 w-full border-0 border-b border-blush-300 bg-transparent px-1 pb-2 text-center text-xl text-blush-900 transition-colors focus:border-blush-600 focus:outline-none"
        >

        <button type="submit" class="btn-seal deco-cut w-full">Open the book</button>

        <p v-if="error" class="mt-4 text-sm text-blush-600" role="alert">
          That word doesn't open it. Check the invitation and try again.
        </p>

        <p class="mt-6 text-sm text-blush-500 italic">
          Scanned the QR code and still landed here? Follow that link again; it opens the
          book without a word.
        </p>
      </div>
    </form>
  </div>
</template>
