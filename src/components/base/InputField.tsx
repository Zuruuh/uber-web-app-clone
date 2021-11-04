import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import InputError from './InputError';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  icon?: IconProp;
  textarea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea = false,
  required = false,
  icon,
  ...props
}) => {
  const [field, { error }] = useField(props);
  let className: string =
    'shadow mt-1 text-gray-700 py-2 px-3 w-full rounded appearence-none leading-tight focus:outline-none focus:shadow-outline border';
  className += error ? ' border-red-500' : ' border';
  className += icon ? ' pr-9' : '';

  const fieldParams = {
    ...field,
    ...props,
    id: field.name,
    placeholder: props.placeholder,
    className,
    required,
  } as unknown;

  if (icon && textarea) {
    throw new Error('Cannot use an icon in a textarea field !');
  }

  return (
    <div className="my-4 flex flex-col">
      <label htmlFor={field.name}>{label}</label>
      <div className="relative">
        {textarea ? <textarea {...fieldParams} /> : <input {...fieldParams} />}
        {icon && (
          <>
            <hr
              className={`${
                error ? 'bg-red-500' : 'bg-gray-200'
              } absolute h-4/5 right-8 top-1.5`}
              style={{ width: 1 }}
            />
            <FontAwesomeIcon
              icon={icon}
              className={`${
                error ? 'text-red-500' : 'text-gray-200'
              } absolute right-2 top-4`}
            />
          </>
        )}
      </div>
      {error ? <InputError error={error} /> : null}
    </div>
  );
};
export default InputField;
