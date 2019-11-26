import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textCustom}>{data.viewName}</Text>
      <Text style={styles.textCustomNew}>{funcs.myFunction(2, 3)}</Text>
      {data.customTextInVar}
    </View>
  )
};

const data = {
  viewName: 'Name of my view',
  customTextInVar: <Text>My Awesome Custom text in var!</Text>
}

const funcs = {
  myFunction: (num1, num2) => {
    return num1 + num2;
  }
}

const styles = StyleSheet.create({
  textCustom: {
    fontSize: 60,
  },
  textCustomNew: {
    fontSize: 60,
  }
});

export default ComponentsScreen;
