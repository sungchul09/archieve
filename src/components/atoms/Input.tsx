import React, { useState } from 'react'

interface InputProps {
  field: 'textOnly' | 'iconLeft' | 'iconRight' | 'prefix'
  fieldIcon: string
  fieldPrefix: string
  size: 'small' | 'default'
  isActive: boolean
  isError: boolean
  disabled: boolean
  placeholder: string
  helperText: string
  maxCounter: number
  onChange?: () => void
}

export function Input({
  field,
  fieldIcon,
  fieldPrefix,
  size,
  isActive,
  isError,
  disabled,
  placeholder,
  helperText,
  maxCounter,
  onChange,
  ...props
}: InputProps) {
  const styles = {
    base: `flex items-center w-200 rounded-4 p-13 px-12 font-light text-black text-16 ring-1`,
    default: 'ring-gray-200',
    error: 'ring-red-500 focus:ring-red-500',
    inactive: 'opacity-40',
    disabled: 'bg-gray-200 bg-opacity-20',
  }

  const styleClassName = [styles.base, isError ? styles.error : styles.default, disabled && styles.disabled].join(' ')

  const [inputValue, setInputValue] = useState('')
  const handleInput = (e: InputEvent) => {
    setInputValue((e.target as HTMLInputElement).value)
  }
  return (
    <div>
      <div className={styleClassName}>
        {field === 'prefix' && <p className={`pr-10 ${disabled && 'cursor-default'}`}>{fieldPrefix}</p>}
        <input
          {...props}
          className="outline-none bg-transparent overflow-hidden"
          type="text"
          disabled={disabled}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInput}
        />
      </div>
      {(helperText.length > 0 || maxCounter > 0) && (
        <div className="flex justify-between">
          <span className="text-red-500 w-120">{isError && helperText}</span>
          {maxCounter > 0 && (
            <span>
              {inputValue.length}/{maxCounter}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
