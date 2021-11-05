import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ButtonHTMLAttributes } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ButtonVariant = 'small' | 'regular' | 'large';
export type ButtonIconPosition = 'left' | 'right';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  size?: ButtonVariant;
  bold?: boolean;
  isLoading?: boolean;
  rounded?: boolean;
  centered?: boolean;
  auto?: boolean;
  centerContent?: boolean;
  spaced?: boolean;
  detachedIcon?: ButtonIconPosition;
  background?: string;
  classes?: string;
  icon?: IconProp;
}

const Button: React.FC<ButtonProps> = ({
  text,
  bold,
  isLoading,
  rounded,
  size: buttonSize = 'small',
  centered,
  icon,
  auto,
  centerContent,
  background,
  detachedIcon,
  spaced,
  classes,
  ...props
}) => {
  const type = bold ? 'text-black bg-white' : 'text-white bg-black';
  const hovered = bold ? 'hover:bg-gray-50' : 'hover:bg-gray-800';
  const transition = 'transition-all duration-300 ease-in-out ';
  const borderRadius = rounded ? 'rounded-full' : 'rounded-md';
  const position = centered ? 'justify-center' : 'justify-start';
  const itemsPosition = centerContent ? 'justify-center' : 'justify-start';
  const width = auto ? 'flex-1' : 'auto';
  const margin = spaced ? 'm-1' : 'mx-1';
  const iconPosition = detachedIcon
    ? `absolute ${detachedIcon === 'left' ? 'left-2.5' : 'right-2.5'}`
    : 'mr-2';

  let size: string;
  switch (buttonSize) {
    case 'small':
      size = 'text-md';
      break;
    case 'regular':
      size = 'text-lg';
      break;
    case 'large':
      size = 'text-xl';
      break;
  }

  return (
    <div className={`flex w-full ${margin} ${position}`}>
      <button
        disabled={isLoading}
        style={{ background }}
        {...props}
        className={`px-2 py-1 flex items-center relative ${width} ${size} ${borderRadius} ${type} ${hovered} ${transition} ${itemsPosition} ${classes}`}
      >
        {isLoading ? (
          <FontAwesomeIcon icon={faSpinner} spin />
        ) : (
          <>
            {icon ? (
              <FontAwesomeIcon
                icon={icon}
                className={`${size} ${iconPosition}`}
              />
            ) : null}
            {text}
          </>
        )}
      </button>
    </div>
  );
};
export default Button;
