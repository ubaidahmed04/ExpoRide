import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  Button,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome6 } from "@expo/vector-icons";

export default function MarkAttendance() {
  const navigation = useNavigation();
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>

      <View style={styles.Movebutton}>
        <Link style={styles.button} href="/(scanQr)">
          <FontAwesome6 name="arrow-trend-up" size={40}  />
             
            
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
    color:"#175E96"
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.25,
    color: "white",
  },
  Movebutton:{
    bottom:60,
    left:110,
  }
});
