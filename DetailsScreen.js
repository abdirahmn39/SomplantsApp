import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyProduct = () => {
    alert(`Thanks for Purchasing ${quantity} quantity of ${product.name}`);
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <View style={styles.horizontalLine} />

      <Text style={styles.productDescription}>{product.description}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton} onPress={handleDecreaseQuantity}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={handleIncreaseQuantity}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buyButton} onPress={handleBuyProduct}>
        <Text style={styles.buyButtonText}>Purchase Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 8,
  },
  horizontalLine: {
    width: windowWidth - 32,
    height: 1,
    backgroundColor: '#888888',
    marginBottom: 8,
  },
  
  productDescription: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'left',
    marginBottom: 8,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  quantityButton: {
    backgroundColor: '#007815',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  quantityButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 12,
  },
  buyButton: {
    marginTop: 16,
    backgroundColor: '#007815',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;