const COOKIE_NAME = 'wedding-auth'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180

// Module-level singleton, the same pattern useBook.ts uses. Nuxt's useCookie()
// hands every caller its own ref, so the gate writing the cookie never told
// app.vue about it: the unlock landed in document.cookie and the gate stayed on
// screen. One shared ref is what actually flips the view.
const isAuthenticated = ref(false)
const error = ref(false)

function readCookie(): boolean {
  if (!import.meta.client) return false
  for (const entry of document.cookie.split('; ')) {
    const separator = entry.indexOf('=')
    if (entry.slice(0, separator) !== COOKIE_NAME) continue
    // Guests unlocked before this rewrite carry the cookie Nuxt's useCookie
    // wrote, which is JSON, so quoted. Both spellings have to open the book.
    const value = decodeURIComponent(entry.slice(separator + 1)).replace(/^"|"$/g, '')
    return value === 'true'
  }
  return false
}

function writeCookie() {
  if (!import.meta.client) return
  // path=/ so the cookie holds across the /wedding-website/ base path and any
  // future move to a domain root. Not a security boundary; see CLAUDE.md.
  document.cookie = `${COOKIE_NAME}=true; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`
}

export function useAuth() {
  const config = useRuntimeConfig()

  // The page is prerendered with the gate showing, so the cookie can only be
  // consulted after hydration. Calling this any earlier makes the client render
  // the book over server markup that holds the gate, which Vue rejects as a
  // hydration mismatch.
  function restore() {
    if (readCookie()) isAuthenticated.value = true
  }

  function unlock(password: string) {
    if (password === config.public.weddingPassword) {
      writeCookie()
      isAuthenticated.value = true
      error.value = false
    } else {
      error.value = true
    }
  }

  function unlockWithInvite(token: string) {
    if (token === config.public.inviteToken) {
      writeCookie()
      isAuthenticated.value = true
    }
  }

  return { isAuthenticated, restore, unlock, unlockWithInvite, error }
}
