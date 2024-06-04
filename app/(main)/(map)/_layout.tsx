import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { Slot, Tabs } from 'expo-router';

export default function HomeLayout() {
  const IconColor = "#175E96"
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#175E96' ,}}>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Map',
        headerShown:false,
        tabBarIcon: () => <FontAwesome size={28} name="map" color={IconColor} />,
      }}
    />
    <Tabs.Screen
      name="(location)"
      options={{
        title: 'Location',
        headerShown:false,
        tabBarIcon: () => <FontAwesome6 size={28} name="location-crosshairs" color={IconColor} />,
      }}
    />
  </Tabs>
  );
  
}
