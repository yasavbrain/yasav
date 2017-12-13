import React from 'react';

import { Provider } from 'react-redux';
import { Spinner } from 'native-base';
import { View } from 'react-native'

import Style from './styles/Main';
import Colors from './styles/Colors'
import Routes from './Routes';
import store from 'src/store/store';

export default class Root extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      console.log(store.getState())
      return (
        <Provider store={store}>
          <Routes />
        </Provider>
      );
    } else {
      return (
          <View style={Style.global.spinnerContent}>
            <Spinner color={Colors.primary} />
          </View>
      );
    }
  }
}
