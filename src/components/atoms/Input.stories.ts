/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@components/atoms/Input'

const meta = {
  title: 'atoms/input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    field: {
      control: 'inline-radio',
      options: ['textOnly', 'iconLeft', 'iconRight', 'prefix'],
    },
    fieldIcon: {
      control: 'inline-radio',
      options: ['Camera', 'Circle', 'Search', 'Spinner'],
    },
    fieldPrefix: {
      control: 'text',
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'default'],
    },
    isActive: {
      control: 'boolean',
    },
    isError: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    maxCounter: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

const defaultArgs: Story = {
  args: {
    field: 'textOnly',
    fieldIcon: 'Search',
    fieldPrefix: '+82',
    size: 'default',
    isError: false,
    disabled: false,
    placeholder: 'please input text',
    helperText: '올바른 텍스트를 입력해주세요.',
    maxCounter: 100,
  },
}

export const Default: Story = defaultArgs
