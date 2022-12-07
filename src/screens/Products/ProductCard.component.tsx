import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

type ProductCardProps = {
  name: string;
  imageUrl: string;
  price: number;
  onAddToCart: () => void;
  onDeleteFromCart: () => void;
  cartItemCount: number;
};

const ProductCard = ({
  name,
  imageUrl,
  price,
  onAddToCart,
  onDeleteFromCart,
  cartItemCount = 0,
}: ProductCardProps) => {
  const Touchable: React.ElementType =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode='cover'
        />
        <View style={styles.productDetails}>
          <Text numberOfLines={2} style={styles.name}>
            {name}
          </Text>
          <Text style={styles.price}>$ {price.toFixed(2)}</Text>
          <View style={styles.buttonContainer}>
            {cartItemCount === 0 ? (
              <Touchable onPress={onAddToCart}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Add</Text>
                </View>
              </Touchable>
            ) : (
              <View style={styles.cartActionsContainer}>
                <Touchable style={styles.cartActions} onPress={onAddToCart}>
                  <View style={styles.cartActions}>
                    <Text style={styles.cartActionText}>+</Text>
                  </View>
                </Touchable>
                <View style={styles.cartCountContainer}>
                  <Text style={{ fontSize: 18 }}>{cartItemCount}</Text>
                </View>
                <Touchable
                  style={styles.cartActions}
                  onPress={onDeleteFromCart}
                >
                  <View style={styles.cartActions}>
                    <Text style={styles.cartActionText}>-</Text>
                  </View>
                </Touchable>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 10,
    shadowColor: 'gray',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.26,
  },
  image: {
    height: 200,
    width: 100,
  },
  row: {
    flexDirection: 'row',
  },
  productDetails: {
    padding: 16,
    flex: 1,
  },
  name: {
    width: '70%',
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 12,
    color: 'gray',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    height: 40,
    width: 150,
    backgroundColor: '#ff9f00',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartActionsContainer: {
    height: 40,
    width: 150,
    flexDirection: 'row',
  },
  cartActions: {
    flex: 1,
    backgroundColor: '#ff9f00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartActionText: { color: '#fff', fontSize: 22 },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  cartCountContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductCard;
