// import React, { useEffect, useContext, useState } from "react";
// import { Button, StyleSheet, View } from "react-native";
// import { Link } from "expo-router";
// import MapView, { Marker } from "react-native-maps";
// import { Polyline } from "react-native-maps";
// import { FontAwesome6 } from "@expo/vector-icons";
// import { debounce } from "lodash";
// import API from "@/constants/Api";
// import { GlobalContext } from "../globalContext";

// function decodePolyline(encoded: string) {
//   let points = [];
//   let index = 0,
//     len = encoded.length;
//   let lat = 0,
//     lng = 0;

//   while (index < len) {
//     let b,
//       shift = 0,
//       result = 0;
//     do {
//       b = encoded.charCodeAt(index++) - 63;
//       result |= (b & 0x1f) << shift;
//       shift += 5;
//     } while (b >= 0x20);
//     let dlat = result & 1 ? ~(result >> 1) : result >> 1;
//     lat += dlat;

//     shift = 0;
//     result = 0;
//     do {
//       b = encoded.charCodeAt(index++) - 63;
//       result |= (b & 0x1f) << shift;
//       shift += 5;
//     } while (b >= 0x20);
//     let dlng = result & 1 ? ~(result >> 1) : result >> 1;
//     lng += dlng;

//     points.push({ latitude: lat * 1e-5, longitude: lng * 1e-5 });
//   }

//   return points;
// }

// export default function MarkAttendance() {
//   const [poly, setPoly] = useState<any>([]);
//   const [res, setRes] = useState<any>(null);
//   const { state } = useContext(GlobalContext);

//   const initialRegion = {
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   };

//   const locationDelayedApi = debounce(
//     async (mylocation: any, destination: any) => {
//       let obj = {
//         point_1: `${mylocation["point"]["lng"]},${mylocation["point"]["lat"]}`,
//         point_2: `${destination["point"]["lng"]},${destination["point"]["lat"]}`,
//       };

//       try {
//         const response = await API.getRoutes(obj);
//         setRes(response);
//       } catch (error) {
//         console.log(error);
//       }
//     },
//     1000
//   );

//   useEffect(() => {
//     if (state.firstLocation && state.secondLocation) {
//       locationDelayedApi(state.firstLocation, state.secondLocation);
//     }
//   }, [state]);

//   useEffect(() => {
//     if (res) {
//       console.log("API Response: ", res);
//       const points = res.paths?.map((v: any) => v.points)[0];
//       if (points) {
//         const arr = decodePolyline(points);
//         console.log("Decoded Polyline: ", arr);
//         setPoly(arr);
//       }
//     }
//   }, [res]);

//   const polylineCoordinates = [
//     { latitude: 24.860735, longitude: 67.001137 }, // Karachi
//     { latitude: 30.375321, longitude: 69.345116 }, // Near Multan
//     { latitude: 31.54972, longitude: 74.343611 }, // Lahore
//     { latitude: 33.684422, longitude: 73.047885 }, // Islamabad
//     { latitude: 34.015137, longitude: 71.524918 }, // Peshawar
//     { latitude: 35.222, longitude: 72.425835 }, // Near Swat Valley
//   ];

//   console.log("res ---===>", res);
//   console.log("poly ---===>", poly);

//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} initialRegion={initialRegion}>
//         {state["firstLocation"] && (
//           <Marker
//             coordinate={{
//               latitude: state.firstLocation?.point?.lat,
//               longitude: state.firstLocation?.point?.lng,
//             }}
//             title="Marker Title"
//             description="Marker Description"
//           />
//         )}

//         {state["secondLocation"] && (
//           <Marker
//             coordinate={{
//               latitude: state.secondLocation?.point?.lat,
//               longitude: state.secondLocation?.point?.lng,
//             }}
//             title="Marker Title"
//             description="Marker Description"
//           />
//         )}
//          {poly.length > 0 && (
//           <Polyline
//             coordinates={poly}
//             strokeWidth={5}
//             strokeColor="red"
//           />
//         )}

//         {/* <Polyline coordinates={polylineCoordinates} strokeWidth={5} strokeColor="red" /> */}
//       </MapView>
//       <View style={styles.Movebutton}>
//         <Link style={styles.button} href="/(location)">
//           <FontAwesome6 name="arrow-trend-up" size={40} />
//         </Link>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   button: {
//     marginTop: 3,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 17,
//     paddingHorizontal: 18,
//     borderRadius: 30,
//     elevation: 3,
//     backgroundColor: "#FFFFFF",
//     color: "#175E96",
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: "500",
//     letterSpacing: 0.25,
//     color: "white",
//   },
//   Movebutton: {
//     bottom: 60,
//     left: 110,
//   },
// });

import React, { useEffect, useContext, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import MapView, { Marker, Polyline } from "react-native-maps";
import {
  Entypo,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { debounce } from "lodash";
import API from "@/constants/Api";
import { GlobalContext } from "../globalContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

function decodePolyline(encoded: any) {
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

    points.push({ latitude: lng * 1e-5, longitude: lat * 1e-5 });
  }

  return points;
}

export default function Page() {
  const [poly, setPoly] = useState<any>([]);
  const [res, setRes] = useState<any>(null);
  const [distance, setDistance] = useState<any>(null);
  const [recent, setRecent] = useState<any>(null);
  const { state } = useContext(GlobalContext);
  // const handleMyLocationData = (data: any) => {
  //   updateFirstLocation(data);
  // };
  // const handleSecondLocationdata = (data: any) => {
  //   updateSecondLocation(data);
  // };
  const initialRegion = {
    latitude: 30.3753,
    longitude: 69.3451,
    latitudeDelta: 5,
    longitudeDelta: 5,
  };

  const locationDelayedApi = debounce(
    async (mylocation: any, destination: any) => {
      let obj = {
        point_1: `${mylocation.point.lng},${mylocation.point.lat}`,
        point_2: `${destination.point.lng},${destination.point.lat}`,
      };

      try {
        const response = await API.getRoutes(obj);
        setRes(response);
        setDistance(res.paths[0].distance / 1000);
        console.log(" show response ", response.paths[0].distance / 1000);
      } catch (error) {
        console.log(error);
      }
    },
    500
  );

  useEffect(() => {
    if (state.firstLocation && state.secondLocation) {
      locationDelayedApi(state.firstLocation, state.secondLocation);
    }
  }, [state]);

  useEffect(() => {
    if (res) {
      const points = res.paths?.map((v: any) => v.points)[0];
      if (points) {
        const arr: any = decodePolyline(points);

        setPoly(arr);
      }
    }
  }, [res]);

  let coord = [
    { latitude: 67.00476, longitude: 24.914440000000003 },
    { latitude: 67.00704, longitude: 24.911350000000002 },
    { latitude: 67.00852, longitude: 24.908260000000002 },
    { latitude: 67.00999, longitude: 24.90397 },
    { latitude: 67.0112, longitude: 24.900360000000003 },
    { latitude: 67.01234000000001, longitude: 24.899160000000002 },
    { latitude: 67.01388, longitude: 24.898300000000003 },
    { latitude: 67.01589, longitude: 24.898130000000002 },
    { latitude: 67.01744000000001, longitude: 24.899330000000003 },
    { latitude: 67.01844000000001, longitude: 24.90088 },
  ];

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {state.firstLocation && (
          <Marker
            coordinate={{
              latitude: state.firstLocation.point.lat,
              longitude: state.firstLocation.point.lng,
            }}
            title="First Marker"
            description="This is the first marker"
          />
        )}

        {state.secondLocation && (
          <Marker
            coordinate={{
              latitude: state.secondLocation.point.lat,
              longitude: state.secondLocation.point.lng,
            }}
            title="Second Marker"
            description="This is the second marker"
          />
        )}
        {/* <Polyline
            coordinates={coord}
            strokeWidth={5}
            strokeColor="red"
          /> */}

        {poly.length > 0 && (
          <Polyline coordinates={poly} strokeWidth={5} strokeColor="red" />
        )}
      </MapView>
      <View style={styles.Movebutton}>
        <Link style={styles.button} href="/(location)">
          {!res ? (
            <FontAwesome6 name="arrow-trend-up" size={40} />
          ) : (
            <Entypo name="circle-with-cross" size={40} />
          )}
        </Link>
      </View>
      {res && (
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            height: 200,
            padding: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              paddingBottom: 15,
            }}
          >
            <MaterialCommunityIcons
              name="motorbike"
              size={40}
              color={"#175E96"}
            />

            <Text>{(res.paths[0].distance / 1000).toFixed(1)} km </Text>
            <Text> {((res.paths[0].distance / 1000) * 50).toFixed()} Rs</Text>
            <Button title="Booking Ride" color={"#175E96"} />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              paddingBottom: 15,
            }}
          >
            <MaterialCommunityIcons name="car" size={40} color={"#175E96"} />

            <Text>{(res.paths[0].distance / 1000).toFixed(1)} km </Text>
            <Text> {((res.paths[0].distance / 1000) * 150).toFixed()} Rs</Text>
            <Button title="Booking Ride" color={"#175E96"} />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              paddingBottom: 10,
            }}
          >
            <MaterialCommunityIcons
              name="rickshaw"
              size={40}
              color={"#175E96"}
            />
            <Text>{(res.paths[0].distance /1000).toFixed(1)} km </Text>
            <Text> {((res.paths[0].distance /1000*100).toFixed())} Rs </Text>

            <Button title="Booking Ride"  color={"#175E96"} />
          </View>
        </View>
      )}
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
  Movebutton: {
    bottom: 60,
    left: 110,
  },
});

// export default Page;
