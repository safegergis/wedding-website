/**
 * The two places the day happens in. The Details plate and the Schedule
 * both print these, so they live in one place and cannot drift apart.
 * Correcting an address here also corrects its map link.
 */
export interface Venue {
  /** Small-caps heading over the address. */
  label: string
  name: string
  street: string
  locality: string
  /** How the time reads on the particulars list. */
  time: string
}

export const VENUES: Venue[] = [
  {
    label: 'Ceremony',
    name: 'Archangel Michael Coptic Orthodox Church',
    street: '4405 W. Edinger Avenue',
    locality: 'Santa Ana, California 92704',
    time: '1:00 pm',
  },
  {
    label: 'Reception',
    name: 'Dove Canyon Golf Club',
    street: '22682 Golf Club Drive',
    locality: 'Trabuco Canyon, California 92679',
    time: 'Cocktails at 4:00 pm',
  },
]

export function mapsUrl(venue: Venue) {
  const query = `${venue.name}, ${venue.street}, ${venue.locality}`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
