import * as React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InfoCard from './InfoCard';
import { useReport } from '../../../features/report/useReport';

function TodayScreen() {
   const {data,loading,error} = useReport('today')
    console.log("==>",data)
   if(loading)return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator size={'large'}/>
   </View>

  return (
    <View style={styles.container}>
        <View style={styles.rowContainer}>
        <InfoCard title="Distance" item={data?.data.totalDistanceTravelled} />
        <InfoCard title="SOC" item={data?.data.soc?.toFixed(2)}/>
        </View>
        <View style={styles.rowContainer}>
        <InfoCard title="Mileage" item={data?.data.mileage}/>
        <InfoCard title="Duration" item={data?.data?.timeTravelled?.durationString}/>
        </View>

    </View>
  );
}

function YesterdayScreen() {
       const {data,loading,error} = useReport('yesterday')

   if(loading)return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator size={'large'}/>
   </View>
  return (
    <View style={styles.container}>
  <View style={styles.rowContainer}>
        <InfoCard title="Distance" item={data?.data.totalDistanceTravelled+" Km"} />
        <InfoCard title="SOC" item={data?.data.soc?.toFixed(2)}/>
        </View>
        <View style={styles.rowContainer}>
        <InfoCard title="Mileage" item={data?.data.mileage}/>
        <InfoCard title="Duration" item={data?.data?.timeTravelled?.durationString}/>
        </View>
    </View>
  );
}

function Last7DaysScreen() {
       const {data,loading,error} = useReport('last7Days')
       console.log("7days",data)

   if(loading)return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator size={'large'}/>
   </View>
  return (
    <View style={styles.container}>
   <View style={styles.rowContainer}>
        <InfoCard title="Distance" item={data?.data.totalDistanceTravelled} />
        <InfoCard title="SOC" item={data?.data.soc?.toFixed(2)}/>
        </View>
        <View style={styles.rowContainer}>
        <InfoCard title="Mileage" item={data?.data.mileage}/>
        <InfoCard title="Duration" item={data?.data?.timeTravelled?.durationString}/>
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
     marginHorizontal:20
     },
     rowContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
     }
});
