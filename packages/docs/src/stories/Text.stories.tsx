import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@chapa-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Um pequeno jabuti xereta viu dez cegonhas felizes',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
