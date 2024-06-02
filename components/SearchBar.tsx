import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SearchCard from "./SearchCard";

const SearchBar = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const [iconValue, setIconValue] = useState("motorbike");
  // console.log(iconValue)

  return (
    <View style={styles.inputDiv}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Where to?"
          placeholderTextColor="#175E96"
          style={styles.input}
        />
        <MaterialCommunityIcons
          name="map-marker-outline"
          size={30}
          color="#7F9DF1"
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Where to?"
          placeholderTextColor="#175E96"
          style={styles.input}
        />
        <MaterialCommunityIcons
          name={"motorbike"}
          size={30}
          color="#7F9DF1"
          style={styles.icon}
        />
      </View>
      <View style={styles.iconTab}>
        <TouchableOpacity
          onPress={() => {
            setIconValue("motorbike");
          }}
        >
          <View>
            <MaterialCommunityIcons
              name="motorbike"
              size={40}
              color="#7F9DF1"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setIconValue("car-side");
          }}
        >
          <View>
            <MaterialCommunityIcons
              name="car-side"
              size={40}
              color="#7F9DF1"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setIconValue("rickshaw");
          }}
        >
          <View>
            <MaterialCommunityIcons
              name="rickshaw"
              size={40}
              color="#7F9DF1"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <SearchCard title={"Hussainabad"} />
      <SearchCard title={"Bahadurabad"} />
      <SearchCard title={"Nazimabad"} />
      <SearchCard title={"Clifton"} />
      <SearchCard title={"Model"} />
      <View style={styles.bottomNav}>
        <View>
          <TouchableOpacity onPress={handleGoBack}>
            <FontAwesome6 name="circle-arrow-left" size={40} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.bottomBtn, { backgroundColor: "#175E96" }]}
            onPress={() => {
              // handle onPress
            }}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputDiv: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: 300,
    height: 60,
    borderRadius: 9,
    padding: 9,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#AEAEAE",
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
    color: "#3e4a61",
  },
  iconTab: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    gap: 100,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  bottomNav: {
    display: "flex",
    flexDirection: "row",
    gap: 220,
    justifyContent: "space-around",
  },
  bottomBtn: {
    // backgroundColor: "#175E96",
    padding: 10,
    borderRadius: 7,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 1,
  },
});
export default SearchBar;
