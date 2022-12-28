import { StoryObj, Meta } from '@storybook/react'
import { Box, TextInput, TextInputProps, Text } from '@chapa-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,

  args: {},
  argTypes: {
    onChange: {
      action: 'changed',
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">E-mail address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'webstories/',
  },
}

export const WithError: StoryObj<TextInputProps> = {
  args: {
    value: 'joanadecastro@gmail.com.br',
    hasError: true,
  },
}
