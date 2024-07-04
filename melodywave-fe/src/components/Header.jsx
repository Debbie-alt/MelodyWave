import React from 'react';

export const Header = () => {
  return (
    <header className="text-white relative h-[90vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold left-[10%]  top-[10%] absolute">Unlimited Music,</h1>
      <img
        src="/goldphone.png"
        width={500}
        height={700}
        alt="Logo"
        className="justify-self-center"
      />
      <h1 className="text-4xl font-bold right-[10%] bottom-[25%] absolute">Unlimited Fun!</h1>
    </header>
  );
};
