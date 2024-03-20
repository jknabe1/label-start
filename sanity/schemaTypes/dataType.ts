import {defineField, defineType} from 'sanity'
import {DatabaseIcon} from '@sanity/icons'



export const dataType = defineType({
  name: 'data',
  title: 'data',
  type: 'document',
  icon: DatabaseIcon,

  groups: [
    {name: 'details', title: 'Details'},
    {name: 'editorial', title: 'Editorial'},
  ],

  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule
      .required()
      .error(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})