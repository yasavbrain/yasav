import React from 'react';

import { Provider } from 'react-redux';
import { Spinner } from 'native-base';
import { View } from 'react-native'

import Style from './styles/Main';
import Colors from './styles/Colors'
import Routes from './Routes';
import db, { CREATE_DB_TABLES_REQUESTS } from './Database';
import store from 'src/store/store';
import { logTableList, dropAllTables } from './utils/DBDebugHelpers';

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

    //dropAllTables(); To uncomment to update the database (quickfix)
    // TODO : add scripts to update the database scheme in newer versions
      db.transaction(tx => {
        CREATE_DB_TABLES_REQUESTS.forEach(req => tx.executeSql(req));
      },
      err => console.log(err),
       () => logTableList()
     );
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

