import React from 'react';

const Message = ({ message }: { message: any }) => {
  return (
    <div className='py-0.5 pl-4 pr-16 leading-[22px] hover:bg-gray-950/[.07]'>
      <p className='pl-14 text-gray-100'>{message.text}</p>
    </div>
  );
};

export default Message;
