import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray50',
  padding: '$2 $3',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',
  width: '100%',

  '&:has(input:focus)': {
    borderColor: '$primary300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    hasError: {
      true: {
        border: '2px solid $danger500',
        color: '$danger500',

        '& input': {
          color: '$danger500',
        },
      },
    },
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray800',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray900',
  fontWeight: 'regular',
  backgroundColor: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray600',
  },
})
