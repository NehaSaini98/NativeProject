import React from 'react';
import {Dashboard, EditProfile, Explore, Home, ProductDetails, Profile} from '../screens';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import imagePath from '../constants/imagePath';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationStrings.HOME} component={Home} />
      <Stack.Screen name={navigationStrings.PRODUCT_DETAIL} component={ProductDetails} />
    </Stack.Navigator>
  );
}

function ProfielStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />
      <Stack.Screen name={navigationStrings.EDIT_PROFILE} component={EditProfile} />
    </Stack.Navigator>
  );
}

function DashboardStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationStrings.DASHBOARD} component={Dashboard} />
      <Stack.Screen name={navigationStrings.EXPLORE} component={Explore} />
    </Stack.Navigator>
  );
}

export default TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'pink',
          position: 'absolute',
          borderRadius: 50,
          bottom: 20,
          marginHorizontal: 16,
          alignContent: 'center',
          height: 50,
          paddingVertical: 30,
        },
      }}>
      {/* initialRouteName - this property is use to set initial route and by this we can place screens any where in the list  */}

      <Tab.Screen
        name={navigationStrings.DASHBOARD}
        component={DashboardStackNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'red' : 'gray'}}
                source={imagePath.icDashboard}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.HOME}
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'red' : 'gray'}}
                source={imagePath.icHome}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={ProfielStackNavigation}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'red' : 'gray'}}
                source={imagePath.icProfile}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
