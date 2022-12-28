import { StoryObj, Meta } from '@storybook/react'
import { Box, TextArea, TextAreaProps, Text } from '@chapa-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,

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
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
