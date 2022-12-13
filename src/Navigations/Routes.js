import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './MainStack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import { Home, ProductDetails } from '../screens';
import TabRoutes from './TabRoutes';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{presentation:'card', headerShown: false}}>
        {MainStack(Stack)}
      </Stack.Navigator> */}
      <Drawer.Navigator screenOptions={{ drawerType: 'slide'}}>
        <Drawer.Screen name={navigationStrings.HOME} component={Home} />
        <Drawer.Screen name={navigationStrings.PRODUCT_DETAIL} component={ProductDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
