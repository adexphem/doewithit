import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Screen from '../components/Screen'
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import ItemSeparatorComponent from '../components/ListItemSeparator'

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
      color: colors.white,
      size: 40
    },
    onPress: () => console.log('clicked listing...')
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
      color: colors.white,
      size: 40
    },
    onPress: () => console.log('clicked messages...')
  }
]

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
        <FlatList 
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          renderItem={({ item }) =>
            <ListItem 
              title={item.title}
              IconComponent={
                <Icon
                  backgroundColor={item.icon.backgroundColor} 
                  iconColor={item.icon.color}
                  name={item.icon.name}
                  size={item.icon.size}
                />
              }
              onPress={item.onPress}
            />
          }
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </View>

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