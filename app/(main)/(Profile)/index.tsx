import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Carosel from "@/components/Crosuel";

const Profile = () => {
  return (
    <ScrollView>
    <View style={{ padding: 30 }}>
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/b2/bb/d5/b2bbd5d5b9998aa216c02bb7dc6c0150.jpg",
            }}
            style={styles.profileImg}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#000",
              fontSize: 20,
              fontWeight: "700",
              letterSpacing: 2,
            }}
          >
            Hello, john
          </Text>
        </View>
      </View>
      <View style={styles.balContain}>
        <View style={styles.balance}>
          <View style={styles.wallet}>
            <View>
              <Text> Balance $ </Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <MaterialIcons name="password" size={20} color="#175E96" />
              <MaterialIcons name="password" size={20} color="#175E96" />
              <MaterialIcons name="password" size={20} color="#175E96" />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingTop: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#fff",
                padding: 5,
                borderRadius: 10,
              }}
            >
              <Entypo name="wallet" size={20} color="#000" />
              <Text style={{ fontSize: 12 }}> Find your wallet</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#fff",
                padding: 5,
                borderRadius: 10,
              }}
            >
              <MaterialIcons name="payments" size={20} color="#000" />
              <Text style={{ fontSize: 12 }}> Find your wallet</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#E4E4E4",
          marginTop: 60,
          borderRadius: 10,
          justifyContent: "space-around",
          display: "flex",
          flexDirection: "row",
          height: 100,
          alignItems: "center",
        }}
      >
        <View>
          <MaterialIcons name="keyboard-arrow-left" size={20} color="#175E96" />
        </View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Ionicons name="help-buoy-outline" size={30} color="#175E96" />
          <Text style={{ fontSize: 12, paddingTop: 10 }}>Help</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <AntDesign name="wallet" size={30} color="#175E96" />
          <Text style={{ fontSize: 12, paddingTop: 10 }}>Wallet</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="layers-triple-outline"
            size={30}
            color="#175E96"
          />
          <Text style={{ fontSize: 12, paddingTop: 10 }}>Trip</Text>
        </View>
        <View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={20}
            color="#175E96"
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          borderBottomWidth: 5,
          borderBottomColor: "#grey",
        }}
      ></View>
      <View style={{ marginTop: 15 }}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            borderWidth: 2,
            borderRadius: 10,
            padding: 8,
            marginTop:10
          }}
        >
          <MaterialCommunityIcons
            name="layers-triple-outline"
            size={20}
            color="#175E96"
          />
          <Text style={{ fontSize: 15 }}>UberOne</Text>
          <AntDesign name="arrowright" size={20} color="#175E96" />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            borderWidth: 2,
            borderRadius: 10,
            padding: 8,
            marginTop:10
          }}
        >
          <MaterialCommunityIcons
            name="gift-outline"
            size={20}
            color="#175E96"
          />
          <Text style={{ fontSize: 15 }}>Sent Gift</Text>
          <AntDesign name="arrowright" size={20} color="#175E96" />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            borderWidth: 2,
            borderRadius: 10,
            padding: 8,
            marginTop:10
          }}
        >
          <Ionicons
            name="settings-outline"
            size={20}
            color="#175E96"
          />
          <Text style={{ fontSize: 15 }}>Settings</Text>
          <AntDesign name="arrowright" size={20} color="#175E96" />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            borderWidth: 2,
            borderRadius: 10,
            padding: 8,
            marginTop:10
          }}
        >
          <MaterialCommunityIcons
            name="star-four-points-outline"
            size={20}
            color="#175E96"
          />
          <Text style={{ fontSize: 15 }}>Earn point</Text>
          <AntDesign name="arrowright" size={20} color="#175E96" />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            borderWidth: 2,
            borderRadius: 10,
            padding: 8,
            marginTop:10
          }}
        >
          <MaterialCommunityIcons
            name="history"
            size={20}
            color="#175E96"
          />
          <Text style={{ fontSize: 15 }}>History</Text>
          <AntDesign name="arrowright" size={20} color="#175E96" />
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  profileImg: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "red",
  },
  balContain: {
    height: 100,
    width: "100%",
    backgroundColor: "grey",
    paddingTop: 10,
    marginTop: 30,
    borderTopEndRadius: 60,
    borderTopLeftRadius: 60,
  },
  wallet: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  balance: {
    height: 100,
    width: "100%",
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: "#c3c3c3",
  },
});
export default Profile;
