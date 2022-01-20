import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

const Crud = () => {
  const data = [
    {
      id: 1,
      name: "shahaib",
      age: 22
    },
    {
      id: 2,
      name: "shahaib",
      age: 22
    },
    {
      id: 3,
      name: "shahaib",
      age: 22
    },
    {
      id: 4,
      name: "shahaib",
      age: 22
    }
  ];
  return (
    <View style={style.container}>
      <Text style={style.header}>Crud</Text>
      <TextInput style={style.inputS} placeholder="name" />
      <TextInput
        style={style.inputS}
        placeholder="age"
        keyboardType="number-pad"
      />
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonTxt}>Add</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={style.list}>
        {data.map(item =>
          <View style={style.listBox} key={item.id}>
            <Text>
              Name : {item.name}
            </Text>
            <Text>
              Age : {item.age}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  inputS: {
    width: "80%",
    // height: 30,
    padding: 10,
    backgroundColor: "grey",
    fontSize: 24,
    margin: 10
  },
  header: {
    fontSize: 32,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    // flex: 0.6,
    width: "30%",
    // height:30,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "black",
    alignItems: "center",
    margin: 10
  },
  buttonTxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  listBox: {
    width: "70%",
    padding: 20,
    margin: 10,
    backgroundColor: "grey"
  },
  list: {
    width: "100%",
    height: 30,
    backgroundColor: "lightblue"
  }
});
export default Crud;
