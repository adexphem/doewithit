import React, { useState } from 'react';
import { FlatList } from 'react-native';

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
  {
  id: 1,
  title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  image: require('../assets/femi.png')
  },
  {
  id: 2,
  title: "O D C A",
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
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
  const [refreshing, setRefreshing] = useState(false);

  const handleItemDelete = (message) => {
    setMessages(messages.filter(item => item.id !== message.id));
  }

  const loadRefreshedData = () => {
    setMessages([
      {
        id: 2,
        title: "O D C A",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        image: require('../assets/femi.png')
      },
      {
        id: 3,
        title: "O R B N",
        description: "Organic Raw Brazil Nuts",
        image: require('../assets/femi.png')
      },
    ]);
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
      refreshing={refreshing}
      onRefresh={loadRefreshedData}
    />
    </Screen>
  );
}

export default MessagesScreen;