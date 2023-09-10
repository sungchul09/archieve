/* eslint-disable react/style-prop-object */
import React from 'react'
import Spinner from '@public/svgs/Spinner.svg'
import Camera from '@public/svgs/Camera.svg'
import Search from '@public/svgs/Search.svg'
import Circle from '@public/svgs/Circle.svg'

export interface IconsProps {
  iconType?: 'Camera' | 'Search' | 'Circle' | 'Spinner'
  animation: 'none' | 'ping' | 'spin'
  width: number
  height: number
}

export function Icons({ iconType, animation, width, height }: IconsProps) {
  const animationStyles = {
    none: '',
    ping: 'animate-ping',
    spin: 'animate-spin',
  }

  const iconClassName = [animation && animationStyles[animation]].join(' ')
  return (
    <>
      {iconType === 'Spinner' && <Spinner className={iconClassName} width={width} height={height} />}
      {iconType === 'Camera' && <Camera className={iconClassName} width={width} height={height} />}
      {iconType === 'Search' && <Search className={iconClassName} width={width} height={height} />}
      {iconType === 'Circle' && <Circle className={iconClassName} width={width} height={height} />}
    </>
  )
}
