import * as React from 'react';
import createClientApp from '@khanhnguyen234/react-core/src/create-client-app';
import ClientAppOptions from '@khanhnguyen234/react-core/src/interfaces/client-app-options.interface';
import storages from '@khanhnguyen234/react-common/src/storages';
import rootModule from './modules/root/root.module';

const options: ClientAppOptions = {
  appName: process.env.APP_NAME,
  container: document.getElementById('root'),
  module: rootModule,
  storages: storages,
  renderMode: 'render',
  // enableReduxDevTools: window.__DEBUG__,
  enableReduxDevTools: true,
  enableSentry: window.__PROD__,
  microFE: true,
};

createClientApp(options);
