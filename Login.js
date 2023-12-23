import React from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Image style={styles.image} source={require("./assets/login.jpg")} />
      <Text style={styles.text}>Login Screen</Text>

      <View>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.txtinput} />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.txtinput} />

        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 24,
  },
  image: {
    width: 300,
    height: 400,
    marginTop: -10,
  },
  label: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: -20,
    textAlign: "left",
  },
  txtinput: {
    borderColor: "green",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 5,
    width: 300,
    height: 50,
    fontSize: 18,
    paddingLeft: 10,
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    height: 50
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;
