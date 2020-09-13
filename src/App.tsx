import * as React from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import * as styles from './styles.scss';
import { scrollToOffset } from '@khanhnguyen234/react-common';
import { ButtonExt, Title } from '@khanhnguyen234/react-components';
import ProductListing from './modules/product-listing';
import ProductDetail from './modules/product-detail';

const App = (props) => {
  const scrollTop = () => {
    scrollToOffset({ top: 0 });
    // TODO: pushState not switch component, must use Link react-router-dom
    // window.history.pushState(null, null, `/`);
  };

  return (
    <div>
      <BrowserRouter>
        <div className={styles.example}>
          <ButtonExt onClick={scrollTop} className={styles.overrideNotWorking}>
            <Link to="/">
              Home
            </Link>
          </ButtonExt>
          <Title className={styles.title}>React + Typescript + Webpack + Workbox</Title>
        </div>
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route exact path="/detail" component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
