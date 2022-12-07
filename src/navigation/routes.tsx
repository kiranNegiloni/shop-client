import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Products/Products.screen';
import CartScreen from '../screens/Cart/Cart.screen';

import Icon from '../components/Icon.component';

import { APP_TEXT, ROUTES } from '../utils/constants';
import colors from '../utils/colors';

const MainStack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primaryColor,
        },
        headerTintColor: colors.navbarTintColor,
      }}
    >
      <MainStack.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: APP_TEXT.products.title,
          headerRight: () => (
            <Icon
              name='cart'
              color={colors.navbarTintColor}
              size={24}
              onPress={() => navigation.navigate(ROUTES.CART)}
            />
          ),
        })}
      />
      <MainStack.Screen
        name={ROUTES.CART}
        component={CartScreen}
        options={() => {
          return {
            headerTitle: APP_TEXT.cart.title,
          };
        }}
      />
    </MainStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};
