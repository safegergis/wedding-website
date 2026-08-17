<script setup lang="ts">
const { isAuthenticated, unlockWithInvite } = useAuth()
const route = useRoute()

const inviteToken = route.query.invite
if (typeof inviteToken === 'string') {
  unlockWithInvite(inviteToken)
}

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
