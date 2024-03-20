import {NumberInputProps, useFormValue} from 'sanity'
import {Stack, Text} from '@sanity/ui'

function addMinutesToDate(date: string, minutes: number) {
  return new Date(new Date(date).getTime() + minutes * -60000)
}

export function DoorsOpenInput(props: NumberInputProps) {
  const date = useFormValue(['date']) as string | undefined

  if (!date || !props.value) {
    return props.renderDefault(props)
  }

  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      <Text size={1}>
        Doors open{' '}
        {addMinutesToDate(date, props.value).toLocaleDateString(undefined, {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        })}
      </Text>
    </Stack>
  )
}