import React from 'react';
import useStorage from '@khanhnguyen234/react-core/src/hooks/useStorage';
import { COOKIE_STORAGE } from '@khanhnguyen234/react-common/src/storages/cookie';

const KEY = 'ex';

const Component = () => {
  const cookie = useStorage(COOKIE_STORAGE);
  cookie.set(KEY, 'Sub Module Tracking');
  const value = cookie.get(KEY);
  console.log(value);
  return null;
};

export default React.memo(Component);
