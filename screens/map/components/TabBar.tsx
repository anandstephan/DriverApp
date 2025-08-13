import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InfoCard from './InfoCard';

function TodayScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.rowContainer}>
        <InfoCard/>
        <InfoCard/>
        </View>
        <View style={styles.rowContainer}>
        <InfoCard/>
        <InfoCard/>
        </View>

    </View>
  );
}

function YesterdayScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.rowContainer}>
        <InfoCard/>
        <InfoCard/>
        </View>
        <View style={styles.rowContainer}>
        <InfoCard/>
        <InfoCard/>
        </View>

    </View>
  );
}

function Last7DaysScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.rowContainer}>
        <InfoCard/>
        <InfoCard/>
        </View>
        <View style={styles.rowContainer}>
        <InfoCard/>
        <InfoCard/>
        </View>

    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const TabBar = ()  =>{
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
          tabBarIndicatorStyle: { backgroundColor: '#000', height: 2 },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#888',
        }}
      >
        <Tab.Screen name="Today" component={TodayScreen} />
        <Tab.Screen name="Yesterday" component={YesterdayScreen} />
        <Tab.Screen name="Last 7 days" component={Last7DaysScreen} />
      </Tab.Navigator>
  );
  
}

export default TabBar

const styles = StyleSheet.create({
  container: {
     flex: 1, 
     alignItems: 'center', 
     justifyContent: 'center',
     },
     rowContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
     }
});
