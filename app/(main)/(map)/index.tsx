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

    points.push([lat * 1e-5, lng * 1e-5]);
  }

  return points;
}

// Example usage
// const encodedString = "cbhwCmw{wK_@Hg@gBNMjIyBFk@LeBBk@HiBTsCEaCT_Av@eBZ_@x@}BzCdBtBwFpA_Dq@i@\\gAXk@tByEe@{@Cw@@UD?p@c@dA{@NJv@kBzG}NzEuK~BkFzEoK`HwO|AiDJ_@AWSU{C{Bc@e@Mk@Go@?]d@_Ct@_DjATlBf@A^Fo@F_@DQNWnEaEDYr@uAHMBARW@St@yA@MAGCE?C?IP[bBkBNPD?BAz@o@d@Yr@W~GbKnArBv@L|IdA@Jr@cB[IaI{@GEGMASPsBFMJEk@u@";
// const routePoints = decodePolyline(encodedString);
// console.log(routePoints);

export default function MarkAttendance() {
  const [poly, setPoly] = useState<any>(null);
  const [res, setRes] = useState<any>(null);
  const { state } = useContext(GlobalContext);
  let routeRes;
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

  const locationDelayedApi = debounce(
    async (mylocation: any, destination: any) => {
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

  let istrue = false;

  useEffect(() => {
    if (!istrue) {
      istrue = true;
      return;
    }
    const points = (res && res["paths"])?.map((v: any) => v.points)[0];
    if (points.trim() != "") {
      const arr = decodePolyline(points);
      setPoly(arr);
      console.log(arr)
    }
  }, [res]);

  // const points = (res && res["paths"])?.map((v:any)=>v.points)[0]

  // console.log("Here is the points",points)

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
        {
Array.isArray(poly) && poly.length>0 && (
<Polyline coordinates={poly} strokeWidth={5} strokeColor="red" />
)
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
