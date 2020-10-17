import React from 'react';

const Root = (props) => {
  const { Router, children, subs, Layout } = props;
  return (
    <>
      <Layout />
      <Router />
      {children}
      {subs}
    </>
  );
};

export default Root;
