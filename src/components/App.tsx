
import * as React from 'react';
import * as styles from './styles.scss';
// import styles from './styles.scss';

import PageInterface from '../PageInterface';

class App extends React.Component<PageInterface, {}> {
  render() {
    return (
      <div className={styles.body}>
        <h1>React + Typescript + Webpack</h1>
        <p>The color of this page is: {this.props.color}</p>
      </div>
    );
  }
}

export default App;