import React from 'react';

const Container: React.FC<{}> = ({ children }) => {
  return <main className="flex justify-center flex-col px-8">{children}</main>;
};

export default Container;
