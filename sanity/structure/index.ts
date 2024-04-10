import type {StructureResolver} from 'sanity/structure'
import {CalendarIcon, UsersIcon, PinIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Upcoming Events')
        .schemaType('event')
        .icon(CalendarIcon)
        .child(S.documentList().title('Upcoming Events').filter('date > now()')),
      S.listItem()
        .title('Past Events')
        .schemaType('event')
        .icon(CalendarIcon)
        .child(S.documentList().title('Past Events').filter('date < now()')),
      S.divider(),
      S.documentTypeListItem('artist').title('Artists').icon(UsersIcon),
      S.documentTypeListItem('venue').title('Venues').icon(PinIcon),
      S.divider(),
      S.listItem()
        .title('Data')
        .schemaType('data')
        .child(S.documentTypeList('data').title('Data')),
      S.divider(),
      S.listItem()
        .title('Nyheter')
        .schemaType('news')
        .child(S.documentTypeList('news').title('Nyheter')),
      S.divider(),
      S.listItem()
        .title('Medarbetare')
        .schemaType('team')
        .child(S.documentTypeList('team').title('Medarbeterare')),
    ])