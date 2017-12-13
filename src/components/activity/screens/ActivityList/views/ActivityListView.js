import React from 'react';
import { Content, Button, Text } from 'native-base';
import { View, ListView } from 'react-native';
import I18n from 'yasav/locales/i18n'

export default class ActivityListView extends React.Component {

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return(
      <View>
        <ListView
          dataSource={ds.cloneWithRows(this.props.displayActivityList)}
          renderRow={(row, j, k) =>
            <Text
              node={row}
              index={parseInt(k,10)}
              style={{height: 75, fontSize: 50}}
              onPress={() => this.props.navigateToActivityListScreen(row)}
            >
              {row.title}
            </Text>
          }
        />
        <Button full primary onPress={() => this.props.navigateToActivityAddScreen}>
          <Text>{I18n.t('activity.activityList.addActivityButton')}</Text>
        </Button>
      </View>
    );
  }
}
