import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchCard: React.FC<{ title: any }> = ({ title }) => {
  return (
    <View style={styles.card2}>
      <View>
        <Ionicons name="timer" size={40} color="#c3c3c3" />
      </View>
      <View>
        <Text style={styles.bold}>{title}</Text>
        <Text style={styles.light}>Karachi</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card2: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    paddingVertical: 12,
    borderBottomColor: "#c3c3c3",
    borderBottomWidth: 0.5,
    backgroundColor: "#fff",
  },
  bold: {
    fontSize: 19,
    fontWeight: "bold",
  },
  light: {
    fontSize: 12,
    color: "#AEAEAE",
  },
});
export default SearchCard;
