import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Button from '../components/AppButton'
import Screen from '../components/Screen'
import listingsApi from '../api/listings'
import Card from '../components/Card'
import colors from '../config/colors'
import AppText from '../components/AppText';

function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async() => {
    const response = await listingsApi.getListings();
    if(!response.ok) return setError(true);
    setError(false);
    setListings(response.data)
  }

  return (
    <Screen style={styles.screen}>
      {error && 
        <View style={styles.errorContainer}>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListings} />
        </View>
      }
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
    backgroundColor: colors.light,
  },
  errorContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: '50%'
  }
})

export default ListingScreen;