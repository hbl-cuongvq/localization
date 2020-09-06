import React, {Component} from 'react';
import {View, Button} from 'react-native';

import {EN, JA, VI} from '../constants/language';

import {LanguageContext} from '../contexts/Language.context';

import TextLocale from '../components/TextLocale';

export default class Settings extends Component {
  render() {
    const {setLanguage} = this.context;
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <TextLocale I18nKey="settings" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button title="VN" onPress={() => setLanguage(VI)} />
          <Button title="ENG" onPress={() => setLanguage(EN)} />
          <Button title="JAP" onPress={() => setLanguage(JA)} />
        </View>
      </View>
    );
  }
}

Settings.contextType = LanguageContext;
