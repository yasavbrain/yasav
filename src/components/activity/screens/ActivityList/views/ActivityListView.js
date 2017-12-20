import React from 'react';
import { Content, Button, Text, List, ListItem } from 'native-base';
import { FlatList } from 'react-native';
import I18n from 'yasav/locales/i18n'

export default class ActivityListView extends React.Component {

  render() {
    return(
      <Content>
        <List dataArray={this.props.displayActivityList}
            renderRow={(item) =>
              <ListItem
                style={{height: 75, backgroundColor: 0}}
                onPress={ () => this.props.navigateToActivityDisplayScreen(item) }
              >
                <Text style={{fontSize: 50}}>{item.title}</Text>
              </ListItem>
            }>
        </List>

        <Button full primary onPress={() => {this.props.navigateToActivityAddScreen()}}>
          <Text>{I18n.t('activity.activityList.addActivityButton')}</Text>
        </Button>
      </Content>
    );
  }
}
