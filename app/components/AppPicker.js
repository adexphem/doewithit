import React, {useState, Fragment} from 'react';
import { Button, FlatList, Modal, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native';

import defaultStyles from '../config/styles'
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({ 
  icon, 
  items, 
  onSelectItem,
  PickerItemComponent = PickerItem, 
  placeholder, 
  selectedItem, 
  width='100%'}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width}]}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
          {selectedItem ? 
            <AppText style={styles.text}>{selectedItem.label}</AppText> :
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          }
          <MaterialCommunityIcons name='chevron-down' size={20} color={defaultStyles.colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList 
          data={items}
          keyExtractor={items => items.label}
          renderItem={({item}) => 
            <PickerItemComponent 
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item)
              }}
            />
          }
        />
      </Modal>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 20,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center"
  },
  icon: {
    marginRight: 10
  },
  placeholder: {
    flex: 1,
    color: defaultStyles.colors.medium
  },
  text: {
    flex: 1
  }
})

export default AppPicker;