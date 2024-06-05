import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome6 ,Ionicons,Entypo
} from '@expo/vector-icons';

// const SearchCard: React.FC<{ title: any }> = ({ title }) => {
const BottomCard: React.FC<{ title: any,description:any }> = ({ title,description }) => {
  return (
    <View style={styles.container}>
        <View  style={styles.card1}>
            <View style={{marginTop:18}}>
            <Entypo name="dribbble-with-circle" size={40} color="#c3c3c3" />

            </View>
        <View>
            <Text style={styles.bold}>{title}</Text>
            <Text style={styles.light}>{description}</Text>
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
      paddingHorizontal:14,
    },
    
    card1:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      gap:9,
      height:70,
      borderBottomColor:"#c3c3c3",
      borderBottomWidth: 0.5,
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
        fontSize:18,
        fontWeight:"bold",
        marginTop:9,

    },
    light:{
        fontSize:12,
        color:"#AEAEAE",

    },
    

})
export default BottomCard