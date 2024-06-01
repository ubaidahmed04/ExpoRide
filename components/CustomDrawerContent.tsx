import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomDrawer(props: any) {
  const navigation = useNavigation();

  const handleSignOut = () => {
    // Write logic for sign out here
    navigation.dispatch(DrawerActions.closeDrawer());
    console.log("Signing out...");
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        {/* Top content of drawer */}
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/b2/bb/d5/b2bbd5d5b9998aa216c02bb7dc6c0150.jpg",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileTitle}>Ubaid & Sharjeel</Text>
          <Text style={styles.profileBio}>
            FrontEnd Developer 
          </Text>
        </View>
        {/* Drawer items */}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.bottomContainer}>
        {/* Bottom content of drawer */}
        <TouchableOpacity style={styles.signOutBtn} onPress={handleSignOut}>
          <MaterialIcons
            name="logout"
            size={24}
            color="#2F2F2F"
            style={styles.signOutIcon}
          />
          <Text style={styles.signOutBtnText}>Sign Out</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://www.softwaredoit.es/logotipos/nubit-consulting.jpg?t=2023-03-29_15_43_10",
          }}
          style={styles.bottomImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    paddingTop: 6,
  },
  profileImage: {
    width: 120,
    height: 120,
  },
  profileTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  profileBio: {
    marginTop: 5,
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
  menuText: {
    fontSize: 16,
    marginLeft: 20,
    color: "#2F2F2F", // Default color for item text
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  signOutBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  signOutBtnText: {
    color: "#2F2F2F",
    marginLeft: 10,
  },
  signOutIcon: {
    marginRight: 10,
  },
  bottomImage: {
    width: "100%",
    height: 80,
    marginTop: 10,
  },
});
