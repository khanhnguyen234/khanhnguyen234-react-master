
import * as React from 'react';
import * as styles from './styles.scss';
import { scrollToOffset } from '@khanhnguyen234/react-common'
import { ButtonExt, Title } from '@khanhnguyen234/react-components'

import PageInterface from '../PageInterface';

const App = (props: PageInterface) => {
  const scrollTop = () => {
    scrollToOffset({top: 9000})
  }

  return (
    <div className={styles.body}>
      <h1>React + Typescript + Webpack + Workbox</h1>

      <ButtonExt onClick={scrollTop} className={styles.btn}>
        Default
      </ButtonExt>
      
      <Title>
        Title default (red color)
      </Title>

      <Title className={styles.title}>
        Title has been override (green color)
      </Title>

      --------------------------------------------------------------------------------------------
      
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
    </div>
  );
}

export default App;