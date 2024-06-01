import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const SearchCard: React.FC<{ title: any }> = ({ title }) => {
    return (
    <View>
        
        <View style={styles.card2}>
          <View style={{ marginTop: 18 }}>
            <Ionicons name="timer" size={40} color="#c3c3c3" />
          </View>
          <View>
            <Text style={styles.bold}>{title}</Text>
            <Text style={styles.light}>Karachi</Text>
          </View>
        </View>
      </View>
  )

}
const styles = StyleSheet.create({
    
  card2: {
    width: 372,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    height: 70,
    borderBottomColor: "#c3c3c3",
    borderBottomWidth: 0.5,
    backgroundColor: "#F6F6F6",
  },
  bold: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 9,
  },
  light: {
    fontSize: 12,
    color: "#AEAEAE",
  },
 
})
export default SearchCard