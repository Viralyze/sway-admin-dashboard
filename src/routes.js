import React from 'react';
import * as firebase from 'firebase';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';
import config from '../config.json';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

import Footer from './common/footer';
import Header from './common/header';
import Sidebar from './common/sidebar';

import Dashboard from './routes/dashboard';
import Tables from './routes/tables';

// Firebase config
const fbConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  databaseURL: config.firebase.databaseURL,
  storageBucket: config.firebase.storageBucket
};
firebase.initializeApp(fbConfig);

class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Dashboard} />
    <Route path='/tables' component={Tables} />
  </Route>
);
