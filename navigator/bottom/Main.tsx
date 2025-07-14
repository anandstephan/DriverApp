import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';
import Services from '../../screens/services';
import Wallet from '../../screens/wallet'
import Profile from '../../screens/profile'
import Colors from '../../constants/color';
import Fonts from '../../constants/font';
const Tab = createBottomTabNavigator();

const DummyScreen = ({ title }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{title}</Text>
  </View>
);

const getIcon = (routeName, focused) => {
  switch (routeName) {
    case 'Assets':
      return require('../../assets/png/Rickshaw.png')
     
    case 'My Wallet':
      return require('../../assets/png/Wallet.png')
        
    case 'Services':
      return require('../../assets/png/settings.png')
   
    case 'My Profile':
      return require('../../assets/png/profile.png')
        
    default:
      return null;
  }
};

const Main = () => {
  return (
    <Tab.Navigator
  initialRouteName="My Wallet"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <Image
            source={getIcon(route.name, focused)}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? Colors.txtblack: Colors.lightGray,
            }}
            resizeMode="contain"
          />
        ),
        tabBarLabelStyle:{
          fontFamily:Fonts.poppinsBold,
          fontSize:13
        },
        tabBarActiveBackgroundColor:Colors.white,
        tabBarActiveTintColor: Colors.txtblack,
        tabBarInactiveTintColor: Colors.lightGray,
        tabBarStyle: {
          backgroundColor: '#3D3D3D',
          height: 60,
          paddingBottom: 5,
        
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Assets" children={() => <DummyScreen title="Assets" />} />
      <Tab.Screen name="My Wallet" component={Wallet}/>
      <Tab.Screen name="Services"  component={Services}/>
      <Tab.Screen name="My Profile"  component={Profile}/>
    </Tab.Navigator>
  );
};

export default Main;
