import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {icons, COLORS, SIZES} from '../constants';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: '12%',
    backgroundColor: '#213057',
    width: '93%',
    bottom: 20,
    borderRadius: 21,
    opacity: 0.8,
    position: 'absolute',
    left: '3.5%',
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.white;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case 'Search':
              return (
                <Image
                  source={icons.search_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case 'Center':
              return (
                <View
                  style={{
                    height: '65%',
                    width: '85%',
                    backgroundColor: COLORS.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 11.55,
                  }}>
                  <Image
                    source={icons.center_icon}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 35,
                      height: 35,
                    }}
                  />
                </View>
              );
            case 'Notification':
              return (
                <Image
                  source={icons.notification_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case 'Setting':
              return (
                <Image
                  source={icons.menu_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Setting" component={Home} />
      <Tab.Screen name="Center" component={Home} />
      <Tab.Screen name="Search" component={Home} />

      <Tab.Screen name="Notification" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
