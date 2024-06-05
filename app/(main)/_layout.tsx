import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import "react-native-reanimated";

import CustomDrawerContent from "@/components/CustomDrawerContent";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("./../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props): any => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerRight: ({ color, size }:any) => <MaterialCommunityIcons name="forwardburger" size={32} color={color} />
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Home",
            headerRight: () => (
              <View
                style={{
                  paddingRight: 20,
                  paddingBottom: 5,
                  paddingTop: 2,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#1a2639",
                    padding: 9,
                    borderRadius: 14,
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  $5.00
                </Text>
              </View>
            ),
            headerTitle: "", //empty rakha he
            headerStyle: {
              backgroundColor: "#175E96",
              height: 100,
            },
            drawerIcon: ({ color, size }: any) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
            drawerActiveBackgroundColor: "#175E96",
            drawerActiveTintColor: "#fff",
          }}
        />

        <Drawer.Screen
          name="(map)"
          options={{
            drawerLabel: "Map",
            title: "Map",
            drawerIcon: ({ color, size }: any) => (
              <FontAwesome5 name="map-marked-alt" size={size} color={color} />
            ),
            drawerActiveBackgroundColor: "#175E96",
            drawerActiveTintColor: "#fff",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { Drawer } from "expo-router/drawer";
// import CustomDrawer from "@/components/cutomDrawer";

// export default function Layout() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Drawer
//         screenOptions={{

//         }}
//         drawerContent={(props) => <CustomDrawer {...props} />}
//       >
//         <Drawer.Screen
//           name="index" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: "about",
//             title: "about",
//           }}
//         />
//         <Drawer.Screen
//           name="home" // This is the name of the page and must match the url from root
//           options={{
//             drawerLabel: "home",
//             title: "home",
//           }}
//         />
//       </Drawer>
//     </GestureHandlerRootView>
//   );
// }
