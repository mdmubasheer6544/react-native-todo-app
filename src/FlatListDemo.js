import React from "react";
import { data } from "./user.js";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Alert,
  Button,
  Image,
  SafeAreaView
} from "react-native";
const styles = StyleSheet.create({
  testStyle: {
    fontSize: 20,
    padding: 30,
    margin: 20,
    backgroundColor: "#fff",
    color: "blue",
    fontWeight: "bold",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
    cursor: "pointer"
  },
  listStyle: {
    flex: 1,
    padding: 10,
    margin: 10,
    textAlign: "center"
  },
  imageUser: {
    width: 290,
    height: 290,
    padding: 5,
    borderRadius: "50%",
    border: "5px solid orange"
  },
  textCard: {
    padding: 5,
    fontWeight: "bold",
    color: "red",
    fontSize: 17
  },
  textCardAddress: {
    fontStyle: "italic",
    padding: 5
  },
  textCardCompany: {
    color: "blue",
    fontSize: 17,
    padding: 5
  },
  container: {
    flex: 1,
    marginTop: "StatusBar.currentHeight || 0"
  }
});
const FlatListDemo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.listStyle}
        keyExtractor={(item) => {
          return item.id;
        }}
        // numColmns={2}
        // horizontal
        // vertical
        // invertor
        // showsHorizontalScrollIndicator={false}
        // showsVerticalScrollIndicator={true}
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.testStyle}>
              <Image style={styles.imageUser} source={{ uri: item.picture }} />
              <Text style={styles.textCard}> Name: {item.name}</Text>
              <Text style={styles.textCard}> Email: {item.email}</Text>
              <Text style={styles.textCardCompany}>
                {" "}
                Company: {item.company.name}
              </Text>
              <Text style={styles.textCardAddress}>
                Address: {item.address.street}, {item.address.city} -
                {item.address.zipcode}
              </Text>

              <Button
                title="Show details"
                color="red"
                onPress={() => {
                  alert("Are you sure!");
                }}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default FlatListDemo;
