import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home.screen';
import AboutScreen from '../screens/About.screen';
import ContactScreen from '../screens/Contact.screen';
import SettingsScreen from '../screens/Settings.screen';

import TextLocale from '../components/TextLocale';

const Tab = createBottomTabNavigator();

export class index extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="home"
            options={{tabBarLabel: () => <TextLocale I18nKey={'home'} />}}
            component={HomeScreen}
          />
          <Tab.Screen
            name="about"
            options={{tabBarLabel: () => <TextLocale I18nKey={'about'} />}}
            component={AboutScreen}
          />
          <Tab.Screen
            name="contact"
            options={{tabBarLabel: () => <TextLocale I18nKey={'contact'} />}}
            component={ContactScreen}
          />
          <Tab.Screen
            name="settings"
            options={{tabBarLabel: () => <TextLocale I18nKey={'settings'} />}}
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default index;
