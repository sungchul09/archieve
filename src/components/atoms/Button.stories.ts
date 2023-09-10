/* eslint-disable import/no-extraneous-dependencies */
import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { Button } from '@components/atoms/Button'

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
    isActive: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    icon: {
      control: 'inline-radio',
      options: ['none', 'left', 'right', 'only'],
    },
    iconType: {
      control: 'select',
      options: ['Camera', 'Search', 'Circle', 'Spinner'],
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const defaultArgs: Story = {
  args: {
    type: 'fill',
    level: 'primary',
    size: 'default',
    isActive: true,
    loading: false,
    icon: 'none',
    iconType: 'Camera',
    children: 'Button',
  },
}

export const Fill: Story = defaultArgs

export const Outline: Story = {
  ...defaultArgs,
  args: {
    ...defaultArgs.args,
    type: 'outline',
  },
}
export const Ghost: Story = {
  ...defaultArgs,
  args: {
    ...defaultArgs.args,
    type: 'ghost',
  },
}
export const Only: Story = {
  ...defaultArgs,
  args: {
    ...defaultArgs.args,
    icon: 'only',
  },
}
export const Inactive: Story = {
  ...defaultArgs,
  args: {
    ...defaultArgs.args,
    isActive: false,
  },
}
export const Loading: Story = {
  ...defaultArgs,
  args: {
    ...defaultArgs.args,
    loading: true,
  },
}

Fill.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  await waitFor(() => {
    expect(canvas.queryByText('You have no tasks')).toBeNull()
  })

  const getButton = () => canvas.getByRole('button', { name: 'Button' })
  const button = getButton()
  await userEvent.click(button)
}
Loading.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  await waitFor(() => {
    expect(canvas.queryByText('You have no tasks')).toBeNull()
  })

  const getButton = () => canvas.getByRole('button', { name: 'Button' })
  const button = getButton()
  await userEvent.click(button)
}
