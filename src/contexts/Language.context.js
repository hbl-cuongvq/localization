import React, {Component} from 'react';

import * as RNLocalize from 'react-native-localize';

import AsyncStorage from '@react-native-community/async-storage';

export const LanguageContext = React.createContext();

import i18n from '../i18n';

import {languages, EN} from '../constants/language';

export class LanguageProvider extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      I18n: i18n,
    };

    this.setLanguage = this.setLanguage.bind(this);
  }

  async setLanguage(newLanguageCode) {
    let languageCodeStored = await AsyncStorage.getItem('languageCode');
    console.log('Current language code:', languageCodeStored);

    if (languageCodeStored != newLanguageCode) {
      await AsyncStorage.setItem('languageCode', newLanguageCode);
    }

    i18n.locale = newLanguageCode;

    this.setState({
      I18n: i18n,
    });

    console.log('set laguage:', newLanguageCode);
  }

  async componentDidMount() {
    this._isMounted = true;

    let languageCodeStored = await AsyncStorage.getItem('languageCode');
    console.log('Stored language:', languageCodeStored || 'empty');
    if (!languageCodeStored) {
      let {languageCode} = RNLocalize.getLocales()[0];
      if (languages.includes(languageCode)) {
        await this.setLanguage(languageCode);
      } else {
        await this.setLanguage(EN);
      }
    } else {
      this.setLanguage(languageCodeStored);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {I18n} = this.state;
    const {setLanguage} = this;

    return (
      <LanguageContext.Provider
        value={{
          I18n,
          setLanguage: setLanguage,
        }}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
