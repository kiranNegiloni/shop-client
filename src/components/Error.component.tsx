import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

type ErrorProps = {
  message: string;
};

const Error = ({ message = '' }: ErrorProps): JSX.Element => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.error}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Error;
