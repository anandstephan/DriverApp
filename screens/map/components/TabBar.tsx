import * as React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InfoCard from './InfoCard';
import { useReport } from '../../../features/report/useReport';
import { useIsFocused } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

type MapLocationFunction={
  setMapLocation:Function
};

function TodayScreen({setMapLocation}:MapLocationFunction) {
   const {data,loading,error} = useReport('today')
    const isFocused = useIsFocused();

    console.log("today1x",isFocused)
   if(loading)return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator size={'large'}/>
   </View>

  if(isFocused && data?.data){
      setMapLocation(data.data.coordinates)  
  }

    

  
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

function YesterdayScreen({setMapLocation}:MapLocationFunction) {
       const {data,loading,error} = useReport('yesterday')
    const isFocused = useIsFocused();

    console.log("today12",isFocused)
  
   if(loading)return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator size={'large'}/>
   </View>

if(isFocused && data?.data){
    setMapLocation(data.data.coordinates)  
}


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

function Last7DaysScreen({setMapLocation}:MapLocationFunction) {
       const {data,loading,error} = useReport('last7Days')
    const isFocused = useIsFocused();
console.log("jj",data)
   

   if(loading)return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator size={'large'}/>
   </View>
    if(isFocused && data?.data){
      console.log("l;ast7da",data.data.coordinates)
        setMapLocation(data.data.coordinates)  
    }

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

const   TabBar = ({setMapLocation}:any)  =>{
  const {t} = useTranslation()
  return (
      <Tab.Navigator
      
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
          tabBarIndicatorStyle: { backgroundColor: '#000', height: 2 },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#888',
          lazy:true,
          
        }}
      >
        <Tab.Screen name={t('today')} >
          {()=> <TodayScreen setMapLocation={setMapLocation} />}
        </Tab.Screen>
        <Tab.Screen name={t('yesterday')}>
          {()=><YesterdayScreen setMapLocation={setMapLocation} />}
          </Tab.Screen>
        <Tab.Screen name={t('last7days')}>
          {()=><Last7DaysScreen setMapLocation={setMapLocation} /> }
        </Tab.Screen>
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
