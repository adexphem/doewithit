import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator'
import Button from '../components/AppButton'
import Screen from '../components/Screen'
import listingsApi from '../api/listings'
import Card from '../components/Card'
import colors from '../config/colors'
import AppText from '../components/AppText';
import useApi from '../hooks/useApi'

function ListingScreen({ navigation }) {
  const {data: listings, error, loading, request: loadListings} = useApi(listingsApi.getListings)

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && 
        <View style={styles.errorContainer}>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListings} />
        </View>
      }

      {loading && <ActivityIndicator visible={loading} />}
      
      {!loading && 
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
      }
      
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