import React from 'react';

export interface StackProps {
  wrap?: boolean;
}

const Stack: React.FC<StackProps> = ({ children, wrap = false }) => {
  return (
    <div className={`p-2`}>
      <div className={`flex ${wrap ? 'flex-col' : 'flex-row'} justify-center`}>
        {children}
      </div>
    </div>
  );
};

export default Stack;
