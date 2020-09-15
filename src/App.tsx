import * as React from 'react';
import { scrollToOffset } from '@khanhnguyen234/react-common';
import { ButtonExt, Title } from '@khanhnguyen234/react-components';
import useHistory from '@khanhnguyen234/react-master/src/pwa/hooks/useHistory';
import * as styles from './styles.scss';

const App = ({ routeComponent }) => {
  const history = useHistory();

  const goHome = () => {
    scrollToOffset({ top: 0 });
    history.push('/');
  };

  return (
    <div>
        <div className={styles.example}>
          <ButtonExt
            onClick={goHome}
            className={styles.overrideNotWorking}
          >
            Home
          </ButtonExt>
          <Title className={styles.title}>
            React + Typescript + Webpack + Workbox
          </Title>
        </div>
        {routeComponent}
    </div>
  );
};

export default App;
