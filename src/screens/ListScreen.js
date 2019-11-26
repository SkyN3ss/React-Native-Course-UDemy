import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    funcs.initView();
  return (
    <View>
        <Text>{data.viewName}</Text>
        <FlatList data={data.usersData} 
        renderItem={({ item }) => <Item name={item.name} />}
        keyExtractor={item => item.name}></FlatList>
    </View>
  )
};

const Item = ({ name }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.listItem}>{name}</Text>
      </View>
    );
}

const data = {
  viewName: 'List Screen',
  usersData: [
    {
        name: 'John' 
    },
    {
        name: 'Josh' 
    },
    {
        name: 'Alfred' 
    },
    {
        name: 'Amelia' 
    },
  ]
}

const funcs = {
    initView: () => {

    },
    testFunc: () => {
        data.myAwesomeArray.map((arr, i) => {
            arr.name = 'test ' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        })
    },
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    listName: {
        fontSize: 32,
        color: '#000000'
    },
});

export default ListScreen;
