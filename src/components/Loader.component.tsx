import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const Loader = (): JSX.Element => (
  <View style={styles.center}>
    <ActivityIndicator size='large' />
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
