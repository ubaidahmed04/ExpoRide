import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import Animated, { Easing } from 'react-native-reanimated'; // or 'react-native'


export default function ScanQr() {
 

  

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.qrImageContainer}>
          <Image
            source={{
              uri: 'https://t3.ftcdn.net/jpg/02/23/88/58/360_F_223885881_Zotk7yyvWJDvq6iWq2A9XU60iVJEnrzC.jpg',
            }}
            style={styles.qrImage}
          />
          <Text style={styles.text}>Scan me</Text>
        </View>
      </View>


      <View style={styles.bottomImageContainer}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYM3FDaXQWS9nxHYKLIxR-bBu6Z0P8BwGMug&s',
          }}
          style={styles.bottomImage}
        />
        <Text style={styles.BottomText}>Powered by Nubit Soft</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 24,
  },
  qrImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  qrImage: {
    height: 40,
    width: 40,
    marginRight: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000',
  },
  bottomImageContainer: {
    marginVertical: 16,
    marginHorizontal: 62,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bottomImage: {
    height: 58,
    width: 58,
    marginRight: 12,
  },
  BottomText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
  },
  camera: {
    flex: 1,
  },
  scannerContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 8,
    borderColor: "#fff",
    margin: 44,
  },
  
});
