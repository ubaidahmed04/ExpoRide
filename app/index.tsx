import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import BottomCard from "@/components/BottomCard";


const defaultColor = "#20588F";

export default function DashboardScreen() {
  const navigation = useNavigation();

  // const goToScreen = (screenName) => {
  //   navigation.navigate(screenName);
  // };

  return (
    <ScrollView>
    <View style={Styles.Header}>
    <Text style={Styles.headText}>
      Try local Favourate
    </Text>
    <Text style={Styles.titleText}>
      Local Resturant are open with delivering with Uber Eats
    </Text>
    <TouchableOpacity style={Styles.headerBtn} >
  <Text style={Styles.headerBtnText}>Order Now</Text>
</TouchableOpacity>
  </View>
  <View style={Styles.ImageDiv}>
      <View style={{ marginBottom: 10}}> 
      <Image
              source={{
                uri: "https://static.thenounproject.com/png/188680-200.png", // ye dono  image add ki front page ki he but show nh ho rhi ye dekh lena
              }}
              style={Styles.cardImage1}
            />
        <Text style={Styles.cardText}>Ride</Text>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2013/07/13/11/29/cherries-158241_1280.png'
          }}
          style={Styles.cardImage1}
        />
        <Text style={Styles.cardText}>Ride</Text>
      </View>
      
    </View>
    <BottomCard/>
    
  </ScrollView>
  );
}

const Styles =StyleSheet.create({
  Header:{
      backgroundColor:"#175E96"
  },
  headText:{
      fontSize:25,
      color:"#FFFFFF", 
      fontWeight:'bold',
      paddingLeft:10,
      margin:2,
      paddingTop:20,
  },
  titleText:{
      fontSize:15,
      color:"#FFFFFF", 
      fontWeight:'400',
      paddingLeft:12,
      width:260,
  },
  headerBtn: {
      backgroundColor: '#1a2639',
      paddingVertical: 10,
      marginTop:20,
      // paddingHorizontal: 10,
      borderRadius: 25,
      alignItems: 'center',
      width:190,
      marginLeft:25,
      marginBottom:40,
    },
    headerBtnText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    ImageDiv:{
      display: "flex",
      flexDirection: "row",
      justifyContent:"center",
      alignItems:"flex-start",
      borderRightWidth:2,
      borderRightColor:"#c3c3c3",
      // bottom:40,
      marginVertical: 10,
      gap:90,
      borderBottomWidth:6,
      borderBlockColor:"#c3c3c3",
  },
    cardImage1:{
      width:100,
      height  :100,
      objectFit:"contain"
    },
    cardText: {
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold'
    }

})