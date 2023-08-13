import React from 'react'

interface ButtonProps {
  type: 'fill' | 'outline' | 'ghost'
  level: 'primary' | 'secondary' | 'tertiary'
  size: 'small' | 'default' | 'large'
  icon: 'none' | 'left' | 'right' | 'only'
  iconType?: string
  children: string
}

export function Button({ type, level, size, iconType, icon, children }: ButtonProps) {
  const levelStyles = {
    primary: 'red-500',
    secondary: 'slate-500',
    tertiary: 'green-500',
  }
  const typeStyles = {
    fill: `bg-${levelStyles[level]} text-white`,
    outline: `border-1 border-${levelStyles[level]} text-${levelStyles[level]}`,
    ghost: `border-none bg-none text-${levelStyles[level]} `,
  }
  const sizeStyles = {
    small: 'rounded-8 p-9 px-16 text-16',
    default: 'rounded-8 p-13 px-24 text-16',
    large: 'rounded-8 p-17 px-24 text-16',
  }
  const statesStyles = {
    active: '',
    inactive: '',
    pressed: '',
    loading: '',
  }
  return (
    <button type="button" className={`hover:cursor-pointer font-bold ${typeStyles[type]} ${sizeStyles[size]}`}>
      {children}
    </button>
  )
}
