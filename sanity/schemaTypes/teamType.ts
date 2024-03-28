import {defineField, defineType} from 'sanity'
import {OkHandIcon} from '@sanity/icons'

export const teamType = defineType({
  name: 'team',
  title: 'Medarbetare',
  type: 'document',
  icon: OkHandIcon,

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
    defineField({
        name: 'email',
        type: 'string',
      }),
    defineField({
      name: 'roll',
      type: 'string',
    }),
  ],
})