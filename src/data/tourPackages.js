import countiresList from './countries'

const toOptions = value => ({ text: value, value })

export const countires = countiresList.map(toOptions)

export const themes = [
  'Family',
  'Beach',
  'Romance',
  'Adventure',
  'Hill',
  'Night life',
  'Religious',
].map(toOptions)

export const domesticDestionations = [
  'Andaman',
  'Kerala',
  'Manali & Shimla',
  'Goa',
  'Munnar',
  'Ladhakh',
  'Sikkim & Darjeeling',
].map(toOptions)

export const internationalDestionations = [
  'Thailand',
  'Bali',
  'Maldives',
  'Singapore',
  'Malaysia',
  'Dubai',
  'Switzerland',
  'Austalia',
].map(toOptions)

export const tourTypes = [
  'International',
  'Domestic',
  'Religious',
].map(toOptions)

export const religiousDestionations = [
  'Shirdi',
  'Tirupati',
  'South Indian Temples',
  'Pushkar',
  'Varanasi',
  'Amarnath',
  'Varanasi',
].map(toOptions)

const p = []
for(let i=1;i<101;i++) p.push[i]

export const passengers = p.map(toOptions)
