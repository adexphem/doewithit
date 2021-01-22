import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import AppText from '../components/AppText';
import colors from '../config/colors';

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{`$${listing.price}`}</AppText>
        <View style={styles.userContainer}>
          <ListItem 
            image={require('../assets/femi.png')}
            title="Femi Adeosun"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  detailsContainer: {
    padding: 20
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40
  }
})

export default ListingDetailsScreen;