import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Cart, CartState } from '../../store/typings';

const CartScreen = () => {
  const cartItems = useSelector(
    (state: { cart: { cart: CartState } }) => state.cart.cart
  );

  const cartItemsArr: Array<Cart> = [];
  Object.keys(cartItems).forEach((key: string) =>
    cartItemsArr.push(cartItems[key])
  );

  if (cartItemsArr.length === 0) {
    return (
      <View style={styles.screen}>
        <Text>No items in the cart!</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        {cartItemsArr.map(
          (cartItem: Cart): JSX.Element => (
            <View key={cartItem.id} style={styles.rowItem}>
              <Text style={styles.productName}>{cartItem.name}</Text>
              <View>
                <Text>
                  {cartItem.total} X ${cartItem.price.toFixed(2)}
                </Text>
                <Text style={styles.totalPrice}>
                  $ {Number(cartItem.total * cartItem.price).toFixed(2)}
                </Text>
              </View>
            </View>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
  },
  card: {
    backgroundColor: '#fff',
    padding: 8,
    elevation: 10,
    shadowColor: 'gray',
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  productName: {
    width: '50%',
    fontWeight: '600',
  },
  rowItem: {
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalPrice: { textAlign: 'right', fontWeight: 'bold', marginVertical: 4 },
});

export default CartScreen;
