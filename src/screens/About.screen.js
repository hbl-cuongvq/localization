import React, {Component} from 'react';
import {View} from 'react-native';

import TextLocale from '../components/TextLocale';

export class About extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <TextLocale I18nKey="about" />
      </View>
    );
  }
}

export default About;
