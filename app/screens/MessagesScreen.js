import React from 'react';
import { FlatList, SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem'

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

function MessagesScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
      data={messages}
      keyExtractor={messages => messages.id.toString()}
      renderItem={({item}) => 
        <ListItem 
          title={item.title}
          subTitle={item.description}
          image={item.image}
        />}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})

export default MessagesScreen;