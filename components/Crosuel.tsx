import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

// Data array containing the items to be displayed in the carousel
const data = [
  { title: 'Item 1' },
  { title: 'Item 2' },
  { title: 'Item 3' },
  { title: 'Item 4' },
];

// The function that renders each item in the carousel
const renderItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemLabel}>itemtitl</Text>
    </View>
  );
};

const Carosel = () => {
  return (
    <View style={styles.container}>
      <Carousel
        layout={"default"}
        data={data} // Pass the data array to the Carousel component
        renderItem={renderItem} // Pass the renderItem function to the Carousel component
        sliderWidth={screenWidth} // Width of the slider
        itemWidth={screenWidth * 0.75} // Width of each item
      />
    </View>
  );
};

export default Carosel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    padding: 20,
  },
  itemContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    height: 250,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  itemLabel: {
    fontSize: 24,
    color: "#000000",
  },
});
