import { StoryObj, Meta } from '@storybook/react'
import { HalfPageImage, HalfPageImageProps } from '@chapa-ui/react'

export default {
  title: 'Data Display/HalfPageImage',
  component: HalfPageImage,

  args: {
    src: 'https://cdn.ome.lt/NAeXRwHXI1jAnhkdGChpxjtVt8U=/987x0/smart/uploads/conteudo/fotos/orfa_2.png',
    alt: 'Foto do usuário',
  },
  argsType: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<HalfPageImageProps>

export const Primary: StoryObj<HalfPageImageProps> = {}
