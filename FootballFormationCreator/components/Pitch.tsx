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
});

export default Pitch;
