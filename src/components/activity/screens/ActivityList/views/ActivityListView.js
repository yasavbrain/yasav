import React from 'react';
import { Content, Button, Text } from 'native-base';
import { FlatList } from 'react-native';
import I18n from 'yasav/locales/i18n'

export default class ActivityListView extends React.Component {


  render() {
    return(
      <Content>
        <FlatList
          data={this.props.displayActivityList}
          renderItem={(row, i) => {
            return <Text 
              style={{height: 75, fontSize: 50}}
              onPress={ () => this.props.navigateToActivityDisplayScreen(row.item) }
            > 
              {row.item.title}
            </Text>
            }
          }
        />
        <Button full primary onPress={() => {this.props.navigateToActivityAddScreen()}}>
          <Text>{I18n.t('activity.activityList.addActivityButton')}</Text>
        </Button>
      </Content>
    );
  }
}
