import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { BackHandler } from 'react-native';
import { Linking} from 'react-native'
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };


function click() {
  const url = 'https://alonewapppm.herokuapp.com/';
  Linking.openURL(url);
  alert("Nếu trang chủ sập liên hệ Lê Hoàng")
  }



const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  return (
    <View style={styles.screenContainer}>
      <AppButton onPress={click} title="Hey there!" size="sm" backgroundColor="#007bff" />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default App;
