import React from 'react';

const Root = ({ Router, children, subs }) => {
  return (
    <>
      <Router />
      {children}
      {subs}
    </>
  );
};

export default Root;
