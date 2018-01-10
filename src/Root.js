import React from 'react';

import { Provider } from 'react-redux';
import { Spinner } from 'native-base';
import { View } from 'react-native'

import Style from './styles/Main';
import Colors from './styles/Colors'
import Routes from './Routes';
import db, { CREATE_DB_TABLES_REQUESTS } from './Database';
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

    db.transaction(tx => {
      CREATE_DB_TABLES_REQUESTS.forEach(req => tx.executeSql(req));
    });

    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM sqlite_master WHERE type='table'`,
        null,
        (tx, res) => {
          res.rows._array.forEach(table => console.log(table.name))
        },
        (tx, err) => console.log(err)
      );
    });

  }

  render() {
    if (this.state.fontLoaded) {
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
