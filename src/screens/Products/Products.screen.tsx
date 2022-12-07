import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ListRenderItemInfo,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useNetwork } from '../../hooks/useNetwork';
import Error from '../../components/Error.component';
import { API_ENDPOINTS } from '../../utils/constants';
import Loader from '../../components/Loader.component';
import ProductCard from './ProductCard.component';
import { addToCart, deleteFromCart } from '../../store/actions/cart';
import { Cart, CartState } from '../../store/typings';

const HomeScreen = () => {
  const { data, error, isLoading } = useNetwork(API_ENDPOINTS.products);
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: { cart: { cart: CartState } }) => state.cart.cart
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!error && data.length === 0) {
    return (
      <View>
        <Text>No data found</Text>
      </View>
    );
  }

  const renderProduct = (itemData: ListRenderItemInfo<Cart>) => {
    return (
      <ProductCard
        name={itemData.item.name}
        imageUrl={itemData.item.img}
        price={itemData.item.price}
        cartItemCount={
          cartItems[itemData.item.id] ? cartItems[itemData.item.id]?.total : 0
        }
        onAddToCart={() => dispatch(addToCart(itemData.item))}
        onDeleteFromCart={() => dispatch(deleteFromCart(itemData.item.id))}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        contentContainerStyle={{ padding: 8 }}
        showsVerticalScrollIndicator={false}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
