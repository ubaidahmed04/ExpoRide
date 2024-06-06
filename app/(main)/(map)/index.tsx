import React, { useEffect, useContext, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import { Polyline } from "react-native-maps";
import { FontAwesome6 } from "@expo/vector-icons";
import { debounce } from "lodash";
import API from "@/constants/Api";
import { GlobalContext } from "../globalContext";

function decodePolyline(encoded: string) {
  // console.log("decode func")
  let points = [];
  let index = 0,
    len = encoded.length;
  let lat = 0,
    lng = 0;

  while (index < len) {
    let b,
      shift = 0,
      result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    let dlat = result & 1 ? ~(result >> 1) : result >> 1;
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    let dlng = result & 1 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    points.push({ latitude: lat * 1e-5, longitude: lng * 1e-5 });
  }

  return points;
}

export default function MarkAttendance() {
  const [poly, setPoly] = useState<any>(null);
  const [res, setRes] = useState<any>(null);
  const { state } = useContext(GlobalContext);

  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const locationDelayedApi = debounce(
    async (mylocation: any, destination: any) => {
      let obj = {
        point_1: mylocation["point"]["lng"] + "," + mylocation["point"]["lat"],
        point_2:
          destination["point"]["lng"] + "," + destination["point"]["lat"],
      };

      try {
        const response = await API.getRoutes(obj);
        setRes(response);
        // routeRes = response;
      } catch (error) {
        console.log(error);
      }
    },
    1000
  );
  
  useEffect(() => {
    locationDelayedApi(state["firstLocation"], state["secondLocation"]);
  }, [state]);

  useEffect(() => {
    if (res) {
      const points = (res && res["paths"])?.map((v: any) => v.points)[0];
      if (points.trim() != "") {
        const arr = decodePolyline(points);
        setPoly(arr);
      }
    }
  }, [res]);
  

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {state["firstLocation"] && (
          <Marker
            coordinate={{
              latitude: state.firstLocation?.point?.lat,
              longitude: state.firstLocation?.point?.lng,
            }}
            title="Marker Title"
            description="Marker Description"
          />
        )}

        {state["secondLocation"] && (
          <Marker
            coordinate={{
              latitude: state.secondLocation?.point?.lat,
              longitude: state.secondLocation?.point?.lng,
            }}
            title="Marker Title"
            description="Marker Description"
          />
        )}
        {poly && poly.length > 0 && (
          <Polyline coordinates={poly} strokeWidth={5} strokeColor="red" />
        )}
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
