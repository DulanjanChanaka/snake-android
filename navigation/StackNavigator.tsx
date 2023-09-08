import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../components/HomeScreen';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SnakeSearch from '../screens/search';
import { Categories } from '../components/categories';
import Category from '../screens/category';
import Snakeinfo from '../screens/snakeinfo';
import About from '../screens/about';
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#609966" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#609966" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              )
          }}
        />

        <Tab.Screen
          name="Search"
          component={SnakeSearch}
          options={{
            tabBarLabel: "Search",
            tabBarLabelStyle: { color: "#609966" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="search" size={24} color="#609966" />
              ) : (
                <AntDesign name="search1" size={24} color="black" />
              )
          }}
        />

        <Tab.Screen
          name="Category"
          component={Category}
          options={{
            tabBarLabel: "Category",
            tabBarLabelStyle: { color: "#609966" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Octicons name="stack" size={24} color="#609966" />
              ) : (
                <Octicons name="stack" size={24} color="black" />
              )
          }}
        />

        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarLabel: "About",
            tabBarLabelStyle: { color: "#609966" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="account-group" size={24} color="#609966" />
              ) : (
                <MaterialCommunityIcons name="account-group-outline" size={24} color="black" />
              )
          }}
        />
        {/* Define other tabs/screens similarly */}
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Info" component={Snakeinfo} options={{ headerShown: false }} />
      </Stack.Navigator>

      
        
      
    </NavigationContainer>
  );
}

export default StackNavigator;

const styles = StyleSheet.create({});
