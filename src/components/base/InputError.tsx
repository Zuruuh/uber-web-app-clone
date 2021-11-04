import React from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface InputErrorProps {
  error: string;
}

const InputError: React.FC<InputErrorProps> = ({ error }) => {
  return (
    <div className="flex mt-1 ml-1 text-sm italic items-center">
      <FontAwesomeIcon
        icon={faInfoCircle}
        size="sm"
        color="rgba(220, 38, 38)"
      />
      <p className="text-red-600">{error}</p>
    </div>
  );
};
export default InputError;
