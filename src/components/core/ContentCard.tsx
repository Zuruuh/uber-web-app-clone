import React from 'react';

interface ContentCardProps {
  title?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, children }) => {
  return (
    <div className="border sm:p-8 p-4 rounded-md shadow-lg">
      <h4 className="font-medium md:text-xl text-lg">{title}</h4>
      <div className="flex flex-col justify-center">{children}</div>
    </div>
  );
};
export default ContentCard;
