import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({ size = 'sm', ...props }: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User weight="bold" />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
