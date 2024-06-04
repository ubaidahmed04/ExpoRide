import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SearchCard from "./SearchCard";
import { Dropdown } from "react-native-element-dropdown";
import API from "@/constants/Api";
import { debounce } from "lodash";

const SearchBar = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const [iconValue, setIconValue] = useState<any>("motorbike");
  const [value, setValue] = useState<any>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [searchLocationValue, setSearchLocationValue] = useState<string>(""); // value of text input inside of dropdown
  const [destinationValue, setDestinationValue] = useState<any>(null);
  const [isFocusedDestination, setIsFocusedDestination] = useState(false);
  const [searchDestinationValue, setdestinationLocationValue] = useState<string>(""); // value of text input inside of dropdown
  const [myRes, setMyRes] = useState<any>([]);
  const [res, setRes] = useState<any>([]);

  useEffect(() => {
    const locationDelayedApi = debounce(async () => {
      try {
        const response = await API.getCode(searchLocationValue);
        const result = await response.hits;
        setMyRes(result.filter((v: any) => v.country == "Pakistan")); // filter by country pakistan
      } catch (error) {
        console.log(error);
      }
    }, 1000); // 1sec debounce delay
    if (searchLocationValue.trim() != "") {
      locationDelayedApi();
    }
    return locationDelayedApi.cancel;
  }, [searchLocationValue]);

  useEffect(() => {
    const destinationDelayedApi = debounce(async () => {
      try {
        const response = await API.getCode(searchDestinationValue);
        const result = await response.hits;
        setRes(result.filter((v: any) => v.country == "Pakistan")); // filter by country pakistan
      } catch (error) {
        console.log(error);
      }
    }, 1000); // 1sec debounce delay
    if (searchDestinationValue.trim() != "") {
      destinationDelayedApi();
    }
    return destinationDelayedApi.cancel;
  }, [searchDestinationValue]);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "#175E96" }]}>
          Location
        </Text>
      );
    }
    return null;
  };

  const renderLabel2 = () => {
    if (value || isFocusedDestination) {
      return (
        <Text
          style={[styles.label, isFocusedDestination && { color: "#175E96" }]}
        >
          Destination
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <View style={styles.container}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "#175E96" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={myRes}
            search
            maxHeight={300}
            labelField="name"
            valueField="_index"
            placeholder={!isFocus ? "search your location" : "..."}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item);
              setIsFocus(false);
            }}
            onChangeText={(text: any) => setSearchLocationValue(text)} // Update search value state
            renderLeftIcon={() => (
              <MaterialCommunityIcons
                style={styles.iconDropdown}
                color={isFocus ? "#175E96" : "black"}
                name="map-marker-outline"
                size={24}
              />
            )}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.container}>
          {renderLabel2()}
          <Dropdown
            style={[
              styles.dropdown,
              isFocusedDestination && { borderColor: "#175E96" },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={res}
            search
            maxHeight={300}
            labelField="name"
            valueField="_index"
            placeholder={
              !isFocusedDestination ? "search your destination" : "..."
            }
            searchPlaceholder="Search..."
            value={destinationValue}
            onFocus={() => setIsFocusedDestination(true)}
            onBlur={() => setIsFocusedDestination(false)}
            onChange={(item) => {
              setDestinationValue(item);
              setIsFocusedDestination(false);
            }}
            onChangeText={(text: any) => setdestinationLocationValue(text)} // Update search value state
            renderLeftIcon={() => (
              <MaterialCommunityIcons
                style={styles.iconDropdown}
                color={isFocusedDestination ? "#175E96" : "black"}
                name={iconValue}
                size={24}
              />
            )}
          />
        </View>
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
              color={iconValue == "motorbike" ? "#175E96" : "#3e4a61"}
              style={iconValue == "motorbike" && styles.icon}
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
              color={iconValue == "car-side" ? "#175E96" : "#3e4a61"}
              style={iconValue == "car-side" && styles.icon}
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
              color={iconValue == "rickshaw" ? "#175E96" : "#3e4a61"}
              style={iconValue == "rickshaw" && styles.icon}
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
  main: {
    display: "flex",
    alignItems: "center",
    // gap: 10,
  },
  input: {
    width: "100%",
    height: 60,
    borderRadius: 9,
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
    // borderWidth: 1,
    // borderRadius: 5,
    // paddingHorizontal: 18,
    // marginVertical: 5,
  },
  icon: {
    padding: 4,
    backgroundColor: "#175E96",
    color: "#e5efff",
    borderRadius: 50,
  },
  iconTab: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
  },
  bottomNav: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomBtn: {
    padding: 10,
    borderRadius: 7,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 1,
  },

  container: {
    backgroundColor: "white",
    padding: 16,
    width: "100%",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  iconDropdown: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default SearchBar;
