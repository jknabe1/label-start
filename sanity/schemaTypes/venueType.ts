import {defineField, defineType} from 'sanity'

export const venueType = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'City',
      type: 'string',
    }),
    defineField({
      name: 'Country',
      type: 'string',
    }),
  ],
})