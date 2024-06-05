import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { Slot, Tabs } from "expo-router";

export default function HomeLayout() {
  const iconColor = "#fff"; 
  const activeBackgroundColor = "#175E96";
  const inactiveColor = "#000000a0"; 

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeBackgroundColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarStyle: {
          // backgroundColor: activeBackgroundColor,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Map",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              size={24}
              name="map"
              color={focused ? activeBackgroundColor : inactiveColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(location)"
        options={{
          title: "Location",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome6
              size={24}
              name="location-crosshairs"
              color={focused ? activeBackgroundColor : inactiveColor}
            />
          ),
        }}
      />
    </Tabs>
  );
}
