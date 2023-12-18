import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text, FlatList, Image, StyleSheet,Button } from 'react-native';
const products = [
  { id: '1', name: 'Product 1', price: '$10', image: require('./assets/plant1.png') },
  { id: '2', name: 'Product 2', price: '$20', image: require('./assets/plant2.png') },
  { id: '3', name: 'Product 3', price: '$10', image: require('./assets/plant3.png') },
  { id: '4', name: 'Product 4', price: '$20', image: require('./assets/plant4.png') },
  { id: '5', name: 'Product 5', price: '$10', image: require('./assets/plant5.png') },
  { id: '6', name: 'Product 6', price: '$20', image: require('./assets/plant6.png') },
  // Add more products as needed
];
const Stack = createStackNavigator();
const Products = ({navigation}) => {
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Button
        title="checkout"
        onPress={() => navigation.navigate('Details')}
      />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Adjust the number of columns as needed
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5FCFF',
  },
  productContainer: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 14,
    color: '#888888',
  },
});
export default Products;