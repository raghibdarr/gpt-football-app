import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// Main Pitch component
const Pitch: React.FC = () => {
  return (
    <View style={styles.pitch}>
      {/* Top half of the pitch */}
      <View style={styles.halfPitchTop} />

      {/* 16-yard box top */}
      <View style={styles.sixteenYardBoxTop} />

      {/* 16-yard box bottom */}
      <View style={styles.sixteenYardBoxBottom} />

      {/* Goal top */}
      <View style={styles.goalTop} />

      {/* Goal bottom */}
      <View style={styles.goalBottom} />

      {/* Center circle */}
      <View style={styles.centerCircle} />

      {/* Bottom half of the pitch */}
      <View style={styles.halfPitchBottom} />
    </View>
  );
};

// Styles for the Pitch component
const styles = StyleSheet.create({
  pitch: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  halfPitchTop: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  halfPitchBottom: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: 'white',
  },
  centerCircle: {
    position: 'absolute',
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
  sixteenYardBoxTop: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'white',
    width: '55%',
    height: '16%',
    top: '10%',
    alignSelf: 'center',
  },
  sixteenYardBoxBottom: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'white',
    width: '55%',
    height: '16%',
    bottom: '10%',
    alignSelf: 'center',
  },
  goalTop: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'white',
    width: '10%',
    height: '2%',
    top: '7%',
    alignSelf: 'center',
  },
  goalBottom: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'white',
    width: '10%',
    height: '2%',
    bottom: '7%',
    alignSelf: 'center',
  },
  
});

export default Pitch;
