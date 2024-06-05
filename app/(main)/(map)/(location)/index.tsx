import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import Animated, { Easing } from "react-native-reanimated"; // or 'react-native'
import SearchBar from "@/components/SearchBar";
export default function Location() {

  return (
    <ScrollView >
      <SearchBar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    width: "100%",
    marginVertical: 24,
  },
  qrImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  qrImage: {
    height: 40,
    width: 40,
    marginRight: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#000",
  },
  bottomImageContainer: {
    marginVertical: 16,
    marginHorizontal: 62,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  bottomImage: {
    height: 58,
    width: 58,
    marginRight: 12,
  },
  BottomText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  cameraContainer: {
    flex: 1,
    width: "100%",
  },
  camera: {
    flex: 1,
  },
  scannerContainer: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 8,
    borderColor: "#fff",
    margin: 44,
  },
});
