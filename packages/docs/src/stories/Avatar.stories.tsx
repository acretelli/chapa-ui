import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@chapa-ui/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,

  args: {
    src: 'https://cdn.ome.lt/NAeXRwHXI1jAnhkdGChpxjtVt8U=/987x0/smart/uploads/conteudo/fotos/orfa_2.png',
    alt: 'Foto do usuário',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Medium: StoryObj<AvatarProps> = {
  args: {
    size: 'md',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
