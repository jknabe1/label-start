import {defineField, defineType} from 'sanity'
import {HeartIcon} from '@sanity/icons'

export const sponsorType = defineType({
  name: 'sponsor',
  title: 'Sponsor/samarbetspartner',
  type: 'document',
  icon: HeartIcon,

  fields: [
    defineField(
      {
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})