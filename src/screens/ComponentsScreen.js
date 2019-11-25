import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  return <Text style={styles.textCustom}>Custom Component</Text>;
};

const styles = StyleSheet.create({
  textCustom: {
    fontSize: 60
  }
});

export default ComponentsScreen;
