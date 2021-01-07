import React from 'react';
import { FlatList } from 'react-native';

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const messages = [
  {
  id: 1,
  title: "T1",
  description: "D1",
  image: require('../assets/femi.png')
  },
  {
  id: 2,
  title: "T2",
  description: "D2",
  image: require('../assets/femi.png')
  }
];

const handleItemPress = (item) => {
  console.log('Item ===> ', item);
}

function MessagesScreen() {
  return (
    <Screen>
      <FlatList 
      data={messages}
      keyExtractor={messages => messages.id.toString()}
      renderItem={({item}) => 
        <ListItem 
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => handleItemPress(item)}
          swipeActions={ListItemDeleteAction}
        />}
      ItemSeparatorComponent={ListItemSeparator}
    />
    </Screen>
  );
}

export default MessagesScreen;