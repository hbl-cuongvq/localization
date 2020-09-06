import React, {Component} from 'react';
import {View} from 'react-native';

import TextLocale from '../components/TextLocale';

export class Home extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <TextLocale
          I18nKey={'greeting'}
          style={{
            color: 'red',
            fontSize: 20,
          }}
        />
        <TextLocale
          I18nKey={'introduceName'}
          params={{name: 'Cuong'}}
          style={{
            color: 'dodgerblue',
            fontSize: 18,
          }}
        />

        <TextLocale>123456</TextLocale>
      </View>
    );
  }
}

export default Home;
