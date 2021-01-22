import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'

const listings = [
  {
    id: 1,
    title: "Nice looking couch for sale",
    price: 2300,
    image: require('../assets/couch.jpg')
  },
  {
    id: 2,
    title: "Almost new Dinning set",
    price: 1900,
    image: require('../assets/dinning.jpg')
  },
  {
    id: 3,
    title: "Folding Functional Sofa Bed Fashion Bunk Bed ",
    price: 14900,
    image: require('../assets/reclining.jpg')
  }
]

function ListingScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => 
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light
  }
})

export default ListingScreen;