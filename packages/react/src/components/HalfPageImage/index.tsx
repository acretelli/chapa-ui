import { ComponentProps } from 'react'
import { HalfPageImageContainer, Image } from './styles'

export interface HalfPageImageProps extends ComponentProps<typeof Image> {}

export function HalfPageImage({ ...props }: HalfPageImageProps) {
  return (
    <HalfPageImageContainer>
      <Image {...props} />
    </HalfPageImageContainer>
  )
}
