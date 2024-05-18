import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});

export default Loader;
