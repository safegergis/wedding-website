<script setup lang="ts">
const { isAuthenticated, restore, unlockWithInvite } = useAuth()
const route = useRoute()

// Static deploy: every route serves the same prerendered HTML, which always
// holds the closed cover. The cookie and the QR token are read after hydration
// so the first client render still matches that markup.
onMounted(() => {
  restore()
  const inviteToken = route.query.invite
  if (typeof inviteToken === 'string') {
    unlockWithInvite(inviteToken)
  }
})

useHead({
  title: 'Merola & Safe · November 22, 2026',
})

// Static deploy: the book renders client side behind the gate, so the gallery
// is never prerendered and @nuxt/image would never learn which renditions to
// generate. Resolving each URL here during `pnpm generate` registers it with
// nitro (useImage appends x-nitro-prerender headers), so the optimized files
// exist on the static host. The modifier constants are shared with
// GallerySection.vue, which keeps these URLs identical to the ones requested
// at runtime.
if (import.meta.prerender) {
  const img = useImage()
  const [feature, ...tiles] = GALLERY_PLATES
  img(feature!.src, GALLERY_FEATURE_MODIFIERS)
  for (const plate of tiles) {
    img(plate.src, GALLERY_TILE_MODIFIERS)
  }
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <PasswordGate v-if="!isAuthenticated" />
    <BookShell v-else />
  </div>
</template>
