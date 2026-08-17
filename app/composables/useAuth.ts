export function useAuth() {
  const config = useRuntimeConfig()
  const authCookie = useCookie<string | null>('wedding-auth', {
    maxAge: 60 * 60 * 24 * 180,
  })
  const error = ref(false)

  const isAuthenticated = computed(() => authCookie.value === 'true')

  function unlock(password: string) {
    if (password === config.public.weddingPassword) {
      authCookie.value = 'true'
      error.value = false
    } else {
      error.value = true
    }
  }

  function unlockWithInvite(token: string) {
    if (token === config.public.inviteToken) {
      authCookie.value = 'true'
    }
  }

  return { isAuthenticated, unlock, unlockWithInvite, error }
}
