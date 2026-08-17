export type SectionId = 'cover' | 'story' | 'details' | 'schedule' | 'qa' | 'travel' | 'rsvp' | 'gallery'

export interface BookVerse {
  /** The line itself, set without its surrounding quotation marks. */
  text: string
  /** Chapter and verse, printed after the line. */
  ref: string
}

export interface BookSection {
  id: SectionId
  /** Short label for the contents strip. */
  label: string
  /** Roman chapter numeral. Null for the title page, which print leaves unnumbered. */
  numeral: string | null
  /** A line on love, printed under the folio as a running foot. */
  verse: BookVerse | null
}

const sections: BookSection[] = [
  {
    id: 'cover',
    label: 'Title Page',
    numeral: null,
    verse: { text: 'Love never fails.', ref: '1 Corinthians 13:8' },
  },
  {
    id: 'story',
    label: 'Our Story',
    numeral: 'I',
    verse: { text: 'Many waters cannot quench love, nor can the floods drown it.', ref: 'Song of Solomon 8:7' },
  },
  {
    id: 'details',
    label: 'The Details',
    numeral: 'II',
    verse: { text: 'This is the day the Lord has made; let us rejoice and be glad in it.', ref: 'Psalm 118:24' },
  },
  {
    id: 'schedule',
    label: 'Schedule',
    numeral: 'III',
    verse: { text: 'To everything there is a season, and a time for every purpose under heaven.', ref: 'Ecclesiastes 3:1' },
  },
  {
    id: 'qa',
    label: 'Questions',
    numeral: 'IV',
    verse: { text: 'Love bears all things, believes all things, hopes all things, endures all things.', ref: '1 Corinthians 13:7' },
  },
  {
    id: 'travel',
    label: 'Travel',
    numeral: 'V',
    verse: { text: 'Where you go, I will go; and where you lodge, I will lodge.', ref: 'Ruth 1:16' },
  },
  {
    id: 'rsvp',
    label: 'RSVP',
    numeral: 'VI',
    verse: { text: 'Rejoice with those who rejoice, and be of the same mind toward one another.', ref: 'Romans 12:15' },
  },
  {
    id: 'gallery',
    label: 'Photographs',
    numeral: 'VII',
    verse: { text: 'Set me as a seal upon your heart, as a seal upon your arm.', ref: 'Song of Solomon 8:6' },
  },
]

const activeId = ref<SectionId>('cover')
/** Which way the last turn went, so the leaf pivots on the correct edge. */
const direction = ref<'forward' | 'back'>('forward')

export function useBook() {
  const activeIndex = computed(() => sections.findIndex(section => section.id === activeId.value))
  const activeSection = computed(() => sections[activeIndex.value]!)

  const canGoBack = computed(() => activeIndex.value > 0)
  const canGoOn = computed(() => activeIndex.value < sections.length - 1)

  /**
   * Folio numbers for the spread on screen. The title page is unnumbered, as
   * in print; numbering starts at the first chapter.
   */
  const folios = computed(() => {
    const index = activeIndex.value
    if (index === 0) return { verso: null, recto: null }
    return { verso: index * 2, recto: index * 2 + 1 }
  })

  function goTo(id: SectionId) {
    const target = sections.findIndex(section => section.id === id)
    if (target === -1 || target === activeIndex.value) return
    direction.value = target > activeIndex.value ? 'forward' : 'back'
    activeId.value = id
  }

  function next() {
    if (!canGoOn.value) return
    direction.value = 'forward'
    activeId.value = sections[activeIndex.value + 1]!.id
  }

  function prev() {
    if (!canGoBack.value) return
    direction.value = 'back'
    activeId.value = sections[activeIndex.value - 1]!.id
  }

  return {
    sections,
    activeId,
    activeIndex,
    activeSection,
    direction,
    folios,
    canGoBack,
    canGoOn,
    goTo,
    next,
    prev,
  }
}
