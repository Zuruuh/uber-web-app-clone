import React from 'react';

export type WrapperVariant = 'small' | 'regular' | 'large';

interface ContentWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
  classes?: string;
  variant?: WrapperVariant;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  variant = 'regular',
  classes,
}) => {
  let maxWidth = 400;
  switch (variant) {
    case 'small':
      maxWidth = 200;
      break;
    case 'large':
      maxWidth = 800;
      break;
  }
  return (
    <div className={`mt-8 mx-auto w-full ${classes}`} style={{ maxWidth }}>
      {children}
    </div>
  );
};
export default ContentWrapper;
