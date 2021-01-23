import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen'
import listingsApi from '../api/listings'
import Card from '../components/Card'
import colors from '../config/colors'

function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async() => {
    const response = await listingsApi.getListings();
    setListings(response.data)
  }

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => 
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            imageUrl={item.images[0].url}
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