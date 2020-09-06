import React, {Component} from 'react';
import {Text} from 'react-native';

import {LanguageContext} from '../contexts/Language.context';

export class TextLocale extends Component {
  render() {
    const {I18nKey, params, children, ...rest} = this.props;
    const {I18n} = this.context;

    return (
      <Text {...rest}>
        {I18nKey ? I18n.t(I18nKey, params && params) : children}
      </Text>
    );
  }
}

TextLocale.contextType = LanguageContext;

export default TextLocale;
