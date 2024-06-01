import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";

const defaultColor = "#20588F";

export default function DashboardScreen() {
  const navigation = useNavigation();

  // const goToScreen = (screenName) => {
  //   navigation.navigate(screenName);
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://www.softwaredoit.es/logotipos/nubit-consulting.jpg?t=2023-03-29_15_43_10",
            }}
            style={styles.image}
          />
        </View>

        <Link href="/(attendanceReport)" style={styles.item}>
          <FontAwesome6 name="line-chart" size={24} color="#fff" />
          <Text style={styles.title}>Attendance Report</Text>
        </Link>

        <Link href="/(markAttendance)" style={styles.item}>
          <FontAwesome6 name="chart-line" size={24} color="#fff" />
          <Text style={styles.title}>Mark Attendance</Text>
        </Link>

        <Link href="/(myTask)" style={styles.item}>
          <FontAwesome5 name="tasks" size={24} color="#fff" />
          <Text style={styles.title}>My Task</Text>
        </Link>

        <Link href="/(paySlip)" style={styles.item}>
          <Ionicons name="document-text" size={24} color="#fff" />
          <Text style={styles.title}>Payslip</Text>
        </Link>
        {/* <Pressable
          onPress={() => goToScreen("markAttendance")}
          style={styles.item}
        >
          <FontAwesome6 name="pen-clip" size={24} color="#fff" />
          <Text style={styles.title}>Mark Attendance</Text>
        </Pressable>

        <Pressable
          style={styles.item}
          onPress={() => goToScreen("attendanceReport")}
        >
          <FontAwesome6 name="chart-line" size={24} color="#fff" />
          <Text style={styles.title}>Attendance Report</Text>
        </Pressable>

        <Pressable onPress={() => goToScreen("myTask")} style={styles.item}>
          <FontAwesome5 name="tasks" size={24} color="#fff" />
          <Text style={styles.title}>My Task</Text>
        </Pressable>

        <Pressable onPress={() => goToScreen("paySlip")} style={styles.item}>
          <Ionicons name="document-text" size={24} color="#fff" />
          <Text style={styles.title}>Payslip</Text>
        </Pressable> */}
      </View>

      <View style={styles.bottomImageContainer}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYM3FDaXQWS9nxHYKLIxR-bBu6Z0P8BwGMug&s",
          }}
          style={styles.bottomImage}
        />
        <Text style={styles.bottomText}>powered by Nubit Soft</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  item: {
    backgroundColor: defaultColor,
    paddingVertical: 20,
    paddingHorizontal: 32,
    marginVertical: 8,
    marginHorizontal: 34,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    width: "80%",
    backgroundColor: "yellow",
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
    flex: 1,
    textAlign: "center",
  },
  imageContainer: {
    marginHorizontal: 62,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 148,
    resizeMode: "contain",
    width: "100%",
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
  bottomText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
