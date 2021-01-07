import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, TouchableHighlight, Image } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import MenuItem from '../components/MenuItem'
import Screen from '../components/Screen';
import ProfileHeader from '../components/ProfileHeader'
import AppText from '../components/AppText';
import colors from '../config/colors'

function MyAccountScreen(props) {
  return (
    <Screen style={{backgroundColor: colors.light}}>
      <ProfileHeader 
        title="Femi Adeosun" 
        subTitle="justadeosun@gmail.com"
        image={require('../assets/femi.png')}
        style={{backgroundColor: colors.white}}
      />

      <View style={styles.menu}>
        <MenuItem 
          iconBgColor={colors.primary}
          iconName="format-list-bulleted"
          onPress={() => console.log('pressed..... listing')} 
          textTitle="My Listings"
        />
        <MenuItem 
          iconBgColor={colors.secondary}
          iconName="email"
          onPress={() => console.log('pressed..... messages')} 
          textTitle="My Messages"
        />
      </View>

      <View>
        <MenuItem 
          iconBgColor={colors.pale}
          iconName="logout"
          onPress={() => console.log('pressed..... log out')} 
          textTitle="Log Out"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  menu: {
    marginTop: 40,
    marginBottom: 15
  }
})

export default MyAccountScreen;