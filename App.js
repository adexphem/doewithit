import React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  Alert,
  Image,
  Button,
} from "react-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
  const { landscape } = useDeviceOrientation();

  const handleOnPress = () => {
    console.log("Image tapped");
  };

  const btnTapped = () => {
    console.log("Button clicked");
    twoButtonAlert();
  }

  const twoButtonAlert = () => {
    Alert.alert(
      "Ha! It's Happening",
      "This is to inform you that it's happening, should it continue?",
      [
        {
          text: "Yes",
          onPress: () => console.log("Yes continue"),
        },
        {
          text: "No",
          onPress: () => console.log("No discontinue"),
        }
      ]
    )
  }

  return (
    <View style={{
      backgroundColor: "#cecece",
      flex: 1,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 50,
      }} />
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
        alignSelf: "flex-start"
      }} />
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 50,
      }} />
    </View>
  );
}

// <SafeAreaView style={styles.container}>
//       <View style={{
//         backgroundColor: 'dodgerblue',
//         width: "100%",
//         height: landscape ? "100%" : "30%"
//       }}>
//       </View>
//     </SafeAreaView>

// <Text numberOfLines={1} onPress={handleOnPress}>
//         Hello React Native - This is really realy a very very long text that can be longer if permitted by the way
//         things get longer in the longest dimension of things.
//       </Text>

//       <Button title='Click Me' onPress={btnTapped} color="orange" style={[styles.spacer10]}/>

//       <TouchableHighlight onPress={handleOnPress} style={styles.spacer10}>
//         <Image fadeDuration={1000} source={{ uri: "https://picsum.photos/200/300", width: 200, height: 200 }} />
//       </TouchableHighlight>

//       <TouchableNativeFeedback>
//         <View style={[styles.myView, styles.spacer10]}>
//           <Text>Here & Now</Text>
//         </View>
//       </TouchableNativeFeedback>

const styles = StyleSheet.create({
  spacer10: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // justifyContent: "center",
    // alignItems: "center",
  },
  myView: {
    width: 200,
    height: 70,
    backgroundColor: "dodgerblue",
  },
});
