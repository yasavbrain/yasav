import React from 'react';
import I18n from 'ex-react-native-i18n';
import Style from './Styles/Main';
import Colors from './Styles/Colors'
import { Spinner } from 'native-base';
import { View } from 'react-native'
import Routes from './Routes';

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  // Async call to init the locale
  componentWillMount() {
    I18n.initAsync();
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return <Routes />;
    } else {
      return (
          <View style={Style.global.spinnerContent}>
            <Spinner color={Colors.primary} />
          </View>
      );
    }
  }
}
