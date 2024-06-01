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
      <View style={{ marginBottom: 10 }}> 
      <Image
              source={{
                uri: "https://s.mustakbil.com/employers/d14def2517b8427cacd10fd53c247e21.jpg", // ye dono  image add ki front page ki he but show nh ho rhi ye dekh lena
              }}
              style={Styles.cardImage1}
            />
        <Text style={Styles.cardText}>Ride</Text>
      </View>
      <View>
        <Image
          source={{
            uri: 'data:image/png;base64,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'
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
      bottom:40,
      gap:90,
      borderBottomWidth:6,
      borderBlockColor:"#c3c3c3",
  },
    cardImage1:{
      width:100,
      objectFit:"contain"
    },
    cardText: {
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold'
    }

})