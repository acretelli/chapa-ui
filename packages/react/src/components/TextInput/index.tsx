import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  hasError?: boolean
}

export function TextInput({
  prefix,
  hasError = false,
  ...props
}: TextInputProps) {
  return (
    <TextInputContainer hasError={hasError}>
      {!!prefix && <Prefix>{prefix}</Prefix>}

      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
