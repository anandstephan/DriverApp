import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';
import Services from '../../screens/services';
import Wallet from '../../screens/wallet'
import Profile from '../../screens/profile'
import Colors from '../../constants/color';
import Fonts from '../../constants/font';
import MapStack from '../../screens/map';
import { useTranslation } from "react-i18next";
const Tab = createBottomTabNavigator();



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
    
    case 'संपत्ति':
            return require('../../assets/png/Rickshaw.png')
    case 'मेरा वॉलेट':
         return require('../../assets/png/Wallet.png')
    case 'सेवाएँ':
            return require('../../assets/png/settings.png')
    case 'मेरा प्रोफ़ाइल':
            return require('../../assets/png/profile.png')

    default:
      return null;
  }
};

const Main = () => {
  
  const { t, i18n } = useTranslation();
  return (
    <Tab.Navigator
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
          fontSize:13,
       
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
      <Tab.Screen name={t("assets")} component={MapStack}/>
      <Tab.Screen name={t("wallet")} component={Wallet}/>
      <Tab.Screen name={t("services")} component={Services}/>
      <Tab.Screen name={t("profile")}  component={Profile}/>
    </Tab.Navigator>
  );
};

export default Main;
