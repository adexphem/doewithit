import React from 'react';
import { FlatList, SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native';
import Constants from 'expo-constants'

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
const {statusBarHeight} = Constants;

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
    paddingTop: statusBarHeight
  }
})

export default MessagesScreen;