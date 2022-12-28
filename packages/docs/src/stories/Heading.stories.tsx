import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@chapa-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Heading',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o Heading será sempre um h2, mas podemos mudar isso com a propriedade as',
      },
    },
  },
}
