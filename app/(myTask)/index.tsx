import { Image, StyleSheet, Platform, Text, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function MyTask() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
        source={{ uri: 'https://img.freepik.com/free-photo/3d-hand-with-safe-payment-confirmation-bill_107791-16702.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716422400&semt=ais_user' }}
          style={styles.reactLogo}
        />
      }>
      <View>
        <Text>My task</Text>
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
