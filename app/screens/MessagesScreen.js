import React, { useState } from 'react';
import { FlatList } from 'react-native';

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
  {
  id: 1,
  title: "O R A",
  description: "Organic Raw Almonds",
  image: require('../assets/femi.png')
  },
  {
  id: 2,
  title: "O D C A",
  description: "Organic Dark Chocolate Almonds",
  image: require('../assets/femi.png')
  },
  {
  id: 3,
  title: "O R B N",
  description: "Organic Raw Brazil Nuts",
  image: require('../assets/femi.png')
  },
  {
  id: 4,
  title: "O R & S",
  description: "Organic Roasted & Salted Cashews",
  image: require('../assets/femi.png')
  }
];

const handleItemPress = (item) => {
  console.log('Item ===> ', item);
}

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);

  const handleItemDelete = (message) => {
    setMessages(messages.filter(item => item.id !== message.id));
  }

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
          swipeActions={() => 
            <ListItemDeleteAction handleDelete={() => handleItemDelete(item)}  />
          }
        />}
      ItemSeparatorComponent={ListItemSeparator}
    />
    </Screen>
  );
}

export default MessagesScreen;