import type { Meta, StoryObj } from '@storybook/react'
import { Icons } from '@components/atoms/Icons'

const meta = {
  title: 'atoms/icons',
  component: Icons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconType: {
      control: 'select',
      options: ['Camera', 'Search', 'Circle', 'Spinner'],
    },
    animation: {
      control: 'select',
      options: ['none', 'ping', 'spin'],
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Icons>

export default meta
type Story = StoryObj<typeof meta>

const defaultArgs: Story = {
  args: {
    iconType: 'Camera',
    animation: 'none',
    width: 16,
    height: 16,
  },
}

export const Default: Story = defaultArgs

export const Ping: Story = {
  ...defaultArgs,
  args: {
    ...defaultArgs.args,
    iconType: 'Circle',
    animation: 'ping',
  },
}

export const Spinner: Story = {
  ...defaultArgs,
  args: {
    ...defaultArgs.args,
    iconType: 'Spinner',
    animation: 'spin',
  },
}
