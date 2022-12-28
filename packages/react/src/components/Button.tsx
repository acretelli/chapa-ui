import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontWeight: '$regular',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primary500',

        '&:not(:disabled):hover': {
          background: '$primary800',
        },

        '&:disabled': {
          background: '$gray600',
        },
      },

      secondary: {
        color: '$primary500',
        border: '2px solid $primary500',

        '&:not(:disabled):hover': {
          background: '$primary500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
          border: '2px solid $gray600',
        },
      },

      tertiary: {
        color: '$primary500',

        '&:not(:disabled):hover': {
          color: '$primary300',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 28,
        padding: '0 $2',
        fontsize: '$xs',
      },
      md: {
        height: 40,
        padding: '0 $3',
        fontsize: '$sm',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
