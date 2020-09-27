#### Reference
- https://medium.com/@atingenkay/webpack-4-react-with-typescript-996eb78ff348 
- https://webpack.js.org/concepts/loaders/
- https://webpack.js.org/guides/progressive-web-application/#we-dont-work-offline-now


#### Issue Config
- Import Syntax: can't use `import React from 'react'` must use `import * as React from 'react'` <br/>
  Fix: *https://github.com/DefinitelyTyped/DefinitelyTyped/issues/5128* 
  ```
  // tsconfig.json
  
    {
      "compilerOptions": {
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
      }
    }
  ```
  
- Source Map not working: <br/>
  Fix: *https://github.com/webpack/webpack/issues/7172*
  ```
  // webpack.config.js
  
    devtool: 'inline-source-map',
    plugins: [
      new webpack.SourceMapDevToolPlugin({
        filename: null,
        exclude: [/node_modules/],
        test: /\.ts($|\?)/i,
      })
    ]
  ```