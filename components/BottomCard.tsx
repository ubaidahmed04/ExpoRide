import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome6 ,Ionicons,Entypo
} from '@expo/vector-icons';

export default function BottomCard() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Go again</Text>
        <View  style={styles.card1}>
            <View style={{marginTop:18}}>
            <Entypo name="dribbble-with-circle" size={40} color="#c3c3c3" />

            </View>
        <View>
            <Text style={styles.bold}>Work</Text>
            <Text style={styles.light}>1024,Market Street</Text>
        </View>
        </View>
        <View  style={styles.card2}>
            <View style={{marginTop:18}}>
            <Ionicons name="timer" size={40} color="#c3c3c3" />
            </View>
        <View>
            <Text style={styles.bold}>burnsRoad Street</Text>
            <Text style={styles.light}>Karachi</Text>
        </View>
        </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display:"flex",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      // marginTop:15,   
    },
    text:{
      fontSize:15,
      fontWeight:"bold",
      color:"#AEAEAE",
      // marginBottom:16,
      marginLeft:10,
  },
    card1:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
    gap:9,
      height:100,
      borderBottomColor:"#c3c3c3",
      borderBottomWidth:.5,
    backgroundColor: '#F6F6F6',
    },
    card2:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:9,
        height:100,
        borderBottomColor:"#c3c3c3",
        borderBottomWidth:.5,
      backgroundColor: '#F6F6F6',
    },
    bold:{
        fontSize:23,
        fontWeight:"bold",
        marginTop:9,

    },
    light:{
        fontSize:12,
        color:"#AEAEAE",

    },
    

})