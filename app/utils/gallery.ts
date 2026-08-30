/**
 * The gallery plates. The photograph files live in public/images/gallery so
 * the @nuxt/image pipeline can read them; guests are only ever served the
 * optimized /_ipx/ renditions, which are written at build time. The gallery
 * renders behind the client-side gate and is never prerendered, so app.vue
 * resolves every rendition during `pnpm generate` to register it with nitro.
 *
 * Both that registration and the gallery's own rendering must build each URL
 * from the same modifier constants below: the modifier string is baked into
 * the generated file's path, so any drift means a 404 on the static host.
 */

export interface GalleryPlate {
  /** Path under public/, the form @nuxt/image expects. */
  src: string
  /** Roman plate number, as a book numbers its photographs. */
  numeral: string
}

/** The square grid tiles on the recto. */
export const GALLERY_TILE_MODIFIERS = { format: 'webp', quality: 78, width: 560, height: 560 }

/** Plate I, full on the verso. The source is 1119x1400; this keeps its proportions. */
export const GALLERY_FEATURE_MODIFIERS = { format: 'webp', quality: 80, width: 800, height: 1000 }

const COUNT = 53

const ROMAN: [number, string][] = [
  [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
]

function toRoman(value: number): string {
  let rest = value
  let out = ''
  for (const [n, glyph] of ROMAN) {
    while (rest >= n) {
      out += glyph
      rest -= n
    }
  }
  return out
}

export const GALLERY_PLATES: GalleryPlate[] = Array.from({ length: COUNT }, (_, i) => ({
  src: `/images/gallery/ms-${String(i + 1).padStart(2, '0')}.jpg`,
  numeral: toRoman(i + 1),
}))
