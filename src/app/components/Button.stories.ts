import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'atoms/button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['fill', 'outline', 'ghost'],
    },
    level: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'default', 'large'],
    },
    icon: {
      control: 'inline-radio',
      options: ['none', 'left', 'right', 'only'],
    },
    iconType: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'fill',
    level: 'primary',
    size: 'default',
    icon: 'none',
    iconType: '',
    children: 'buttons',
  },
}
