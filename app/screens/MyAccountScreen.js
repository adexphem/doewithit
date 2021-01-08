import React from 'react';
import { View, StyleSheet } from 'react-native';

import Screen from '../components/Screen'
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

function MyAccountScreen() {
  return (
    <Screen style={{backgroundColor: colors.light}}>
      <View style={styles.profileHeader}>
        <ListItem   
          title="Femi Adeosun" 
          subTitle="justadeosun@gmail.com" 
          image={require('../assets/femi.png')}
        />
      </View>

      <View style={styles.menu}>
        <ListItem 
          IconComponent={<Icon
              backgroundColor={colors.primary} 
              iconColor={colors.white}
              name="format-list-bulleted"
              size={40}
            />}
          title="My Listings"
          onPress={() => console.log('pressed..... listing')} 
        />
        <ListItem 
          IconComponent={<Icon
              backgroundColor={colors.secondary} 
              iconColor={colors.white}
              name="email"
              size={40}
            />}
          title="My Messages"
          onPress={() => console.log('pressed..... messages')} 
        />
      </View>

      <View>
        <ListItem 
          IconComponent={<Icon
              backgroundColor={colors.pale} 
              iconColor={colors.white}
              name="logout"
              size={40}
            />}
          title="Log Out"
          onPress={() => console.log('pressed..... log out')} 
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  menu: {
    marginTop: 40,
    marginBottom: 15
  },
  profileHeader: {
    backgroundColor: colors.white
  }
})

export default MyAccountScreen;