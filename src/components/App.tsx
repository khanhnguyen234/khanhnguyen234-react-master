
import * as React from 'react';
import * as styles from './styles.scss';
import { scrollToOffset } from '@khanhnguyen/react-common/src/utils/window'
// import styles from './styles.scss';

import PageInterface from '../PageInterface';

const App = (props: PageInterface) => {
  const scrollTop = () => {
    scrollToOffset({top: 0})
  }
  return (
    <div className={styles.body}>
      <h2 className={styles.notification}>This is top</h2>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <h1>React + Typescript + Webpack</h1>
      <p>The color of this page is: {props.color}</p>

      <button onClick={scrollTop}>
        scrollToOffset
      </button>
    </div>
  );
}

export default App;