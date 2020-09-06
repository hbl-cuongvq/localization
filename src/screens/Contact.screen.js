import React, {Component} from 'react';
import {Text, View} from 'react-native';

import TextLocale from '../components/TextLocale';

export class Contact extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <TextLocale I18nKey="contact" />
      </View>
    );
  }
}

export default Contact;
