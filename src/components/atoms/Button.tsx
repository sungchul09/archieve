import React from 'react'
import { Icons, IconsProps } from './Icons'

interface ButtonProps {
  type: 'fill' | 'outline' | 'ghost'
  level: 'primary' | 'secondary' | 'tertiary'
  size: 'small' | 'default' | 'large'
  isDisabled: boolean
  loading: boolean
  icon: 'none' | 'left' | 'right' | 'only'
  iconType?: IconsProps['iconType']
  children: string
  onClick?: () => void
}

export function Button({ type, level, size, isDisabled, loading, icon, iconType, children, ...props }: ButtonProps) {
  const TYPE_STYLES = {
    fill: {
      primary: `bg-red-500 text-white`,
      secondary: `bg-slate-500 text-white`,
      tertiary: `bg-green-500 text-white`,
    },
    outline: {
      primary: `border-1 border-red-500 text-red-500`,
      secondary: `border-1 border-slate-500 text-slate-500`,
      tertiary: `border-1 border-green-500 text-green-500`,
    },
    ghost: {
      primary: `border-none bg-none text-red-500`,
      secondary: `border-none bg-none text-slate-500`,
      tertiary: `border-none bg-none text-green-500`,
    },
  }
  const SIZE_STYLES = {
    small: `rounded-8 p-9 px-16 text-16`,
    default: `rounded-8 p-13 px-24 text-16`,
    large: `rounded-8 p-17 px-24 text-16`,
  }
  const MOUSE_CLICK_STYLES = {
    fill: {
      primary: `active:bg-red-600`,
      secondary: `active:bg-slate-600`,
      tertiary: `active:bg-green-600`,
    },
    outline: {
      primary: `active:border-red-600 active:text-red-600`,
      secondary: `active:border-slate-600 active:text-slate-600`,
      tertiary: `active:border-green-600 active:text-green-600`,
    },
    ghost: {
      primary: `active:text-red-600`,
      secondary: `active:text-slate-600`,
      tertiary: `active:text-green-600`,
    },
  }
  const INACITVE_STYLE = 'hover:cursor-default opacity-50'
  const ICON_SIZE_STYLES = {
    small: 16,
    default: 16,
    large: 16,
  }
  const iconAlign = icon === 'right' ? 'flex-row-reverse' : 'flex-row'
  const BASE_STYLE = `hover:cursor-pointer font-bold flex items-center gap-10 ${iconAlign}`

  const applyActiveStyle = !isDisabled && !loading

  const buttonClassName = [
    BASE_STYLE,
    TYPE_STYLES[type][level],
    SIZE_STYLES[size],
    applyActiveStyle ? MOUSE_CLICK_STYLES[type][level] : INACITVE_STYLE,
  ].join(' ')

  const renderIcon = (animation: IconsProps['animation'], name: IconsProps['iconType']) => (
    <Icons iconType={name} animation={animation} width={ICON_SIZE_STYLES[size]} height={ICON_SIZE_STYLES[size]} />
  )
  const renderLoadingIcon = () => <div className="absolute z-10">{renderIcon('spin', 'Spinner')}</div>

  return (
    <div className="flex justify-center items-center">
      {loading && renderLoadingIcon()}
      <button type="button" disabled={loading || isDisabled} className={buttonClassName} {...props}>
        {icon !== 'none' && renderIcon('none', iconType)}
        {icon !== 'only' && <p>{children}</p>}
      </button>
    </div>
  )
}
