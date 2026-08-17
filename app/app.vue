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
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <PasswordGate v-if="!isAuthenticated" />
    <BookShell v-else />
  </div>
</template>
