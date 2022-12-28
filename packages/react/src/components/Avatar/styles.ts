import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',

  variants: {
    size: {
      sm: {
        width: '$6',
        height: '$6',
      },
      md: {
        width: '$8',
        height: '$8',
      },
      lg: {
        width: '$10',
        height: '$10',
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  objectFit: 'cover',
  borderRadius: 'inherit',
  width: '100%',
  height: '100%',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$primary500',
  color: '$gray200',

  svg: {
    width: '$4',
    height: '$4',
  },
})
