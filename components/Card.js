import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Card({
  navigation,
  id,
  to,
  tittle,
  time,
  star,
  picture,
}) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Email", {
            id: id,
          })
        }
        style={styles.TouchableOpacity}
      >
        <View style={styles.imgContainer}>
          <Image source={{ uri: picture }} style={styles.image} />
        </View>
        <View style={styles.information}>
          <View style={styles.informationMain}>
            <Text style={styles.mainText}>{to}</Text>
            <Text style={styles.secondaryText}>{tittle}</Text>
          </View>
          <View style={styles.informationSecondary}>
            <Text style={styles.secondaryText}>{time}</Text>
            {star ? (
              <AntDesign name="star" size={20} color="#FAD02C" />
            ) : (
              <AntDesign name="staro" size={20} color="#FAD02C" />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#E9EAEC",
    borderTopWidth: 1,
    borderTopColor: "#90ADC6",
  },
  TouchableOpacity: {
    width: "100%",
    flexDirection: "row",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  imgContainer: {
    width: "20%",
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  information: {
    width: "80%",
    flexDirection: "row",
  },
  informationMain: {
    flexDirection: "column",
    width: "70%",
  },
  informationSecondary: {
    flexDirection: "column",
    width: "30%",
  },
  mainText: {
    color: "#333652",
    fontWeight: "bold",
  },
  secondaryText: {
    color: "#333652",
  },
});
