/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, } from 'react-native';

import Router from './src/navigation/Router';

import HomeScreen from './src/screens/Home';

import { withAuthenticator } from 'aws-amplify-react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default (App);


//GraphQL endpoint: https://67cg3jvtzfglji6y3edudhesvi.appsync-api.us-east-1.amazonaws.com/graphql
//GraphQL API KEY: da2-tcodzysh7feudpnqt5jckdgaaa