import { styled } from '../../styles'

export const HalfPageImageContainer = styled('div', {
  width: '50vw',
  height: '100vh',
  maxHeight: '100vh',
  overflow: 'hidden',
})

export const Image = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})
