import React, { useEffect, useContext, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import { Polyline } from "react-native-maps";
import { FontAwesome6 } from "@expo/vector-icons";
import { debounce } from "lodash";
import API from "@/constants/Api";
import { GlobalContext } from "../globalContext";

export default function MarkAttendance() {

  const [poly, setPoly] = useState<any>(null)
  const { state } = useContext(GlobalContext);
  const navigation = useNavigation();
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  let body = {
    points: [
      [66.9939479, 24.9502446],
      [67.0227543, 24.9320564],
    ],
    profile: "car",
    elevation: true,
    instructions: true,
    locale: "en_US",
    points_encoded: true,
    points_encoded_multiplier: 1000000,
    snap_preventions: ["ferry"],
    details: [
      "road_class",
      "road_environment",
      "road_access",
      "surface",
      "max_speed",
      "average_speed",
      "toll",
      "track_type",
      "country",
    ],
  };

  const locationDelayedApi = debounce(async (mylocation: any, destination: any) => {
    // route api
    let body = {
      points: [
        [mylocation["point"]["lng"], mylocation["point"]["lat"]],
        [destination["point"]["lng"], destination["point"]["lat"]],
      ],
      profile: "car",
      elevation: true,
      instructions: true,
      locale: "en_US",
      points_encoded: true,
      points_encoded_multiplier: 1000000,
      snap_preventions: ["ferry"],
      details: [
        "road_class",
        "road_environment",
        "road_access",
        "surface",
        "max_speed",
        "average_speed",
        "toll",
        "track_type",
        "country",
      ],
    };
    try {
      const response = await API.getRoutes(body);
      setPoly(response)
    } catch (error) {
      console.log(error);
    }
  }, 1000);

  useEffect(() => {
    locationDelayedApi(state["firstLocation"], state["secondLocation"])
    
  }, [state])
  
  let points = poly && poly["paths"][0]

  console.log(points)
  

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {
          state["firstLocation"] && <Marker
          coordinate={{
            latitude: state.firstLocation?.point?.lat,
            longitude: state.firstLocation?.point?.lng,
          }}
          title="Marker Title"
          description="Marker Description"
        />
        }
        {
          state["secondLocation"] && <Marker
          coordinate={{
            latitude: state.secondLocation?.point?.lat,
            longitude: state.secondLocation?.point?.lng,
          }}
          title="Marker Title"
          description="Marker Description"
        />
        }

      </MapView>
      <View style={styles.Movebutton}>
        <Link style={styles.button} href="/(location)">
          <FontAwesome6 name="arrow-trend-up" size={40} />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    marginTop: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    paddingHorizontal: 18,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "#FFFFFF",
    color: "#175E96",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.25,
    color: "white",
  },
  Movebutton: {
    bottom: 60,
    left: 110,
  },
});
