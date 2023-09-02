import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import HomeScreen from "../screens/HomeScreen";
import screens from "../screens/index";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function MoreScreen () {
  return null;
}

const Navigator = memo(function Navigator({getDrawerRef}) {
  return (
      <Tab.Navigator
        backBehavior="history"
        initialRouteName={screens.home.name}
      >
        <Tab.Screen {...screens.home} component={HomeScreen} options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="filter-drama" size={size} color={color}/>;
          },
          tabBarButton: (props) => <TouchableOpacity activeOpacity={0.6} {...props}/>
        }}/>

        <Tab.Screen {...screens.search} component={SearchScreen} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => {
              return <MaterialIcons name="search" size={size} color={color}/>;
          },
          tabBarButton: (props) => <TouchableOpacity activeOpacity={0.6} {...props}/>
        }}/>

        <Tab.Screen name="more" component={MoreScreen} options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color, size}) => {
            return <MaterialIcons name="more-horiz" size={size} color={color}/>;
          },
          tabBarButton: (props) => <TouchableOpacity activeOpacity={0.6} {...props} onPress={() => getDrawerRef().current.show()}/>
        }}/>

        <Tab.Screen name={screens.settings.name} component={SettingsScreen} options={{
          tabBarButton: () => null,
        }}/>
      </Tab.Navigator>
  );
});

export default Navigator;
