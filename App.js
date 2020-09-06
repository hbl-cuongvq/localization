import 'react-native-gesture-handler';
import React, {Component} from 'react';

import AppNavigator from './src/navigation';

import {LanguageProvider} from './src/contexts/Language.context';

class App extends Component {
  render() {
    return (
      <LanguageProvider>
        <AppNavigator />
      </LanguageProvider>
    );
  }
}

export default App;
