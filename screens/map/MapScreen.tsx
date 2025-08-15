import React, { useEffect, useState } from 'react';
import { View, PermissionsAndroid, Platform, ActivityIndicator, StyleSheet,Text, Image, Button, Pressable } from 'react-native';
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from 'react-native-vector-icons/Fontisto'
import HeaderLogo from '../../assets/jsx/HeaderLogo';
import Language from '../../assets/jsx/Language';
import BatterySign from '../../assets/jsx/BatterySign';
import Heart from '../../assets/jsx/Heart';
import Temperature from '../../assets/jsx/Temperature';
import Road from '../../assets/jsx/Road';
import StopWatch from '../../assets/jsx/StopWatch';
import { useNavigation } from '@react-navigation/native';
import Carousel from './components/Carousel';
import { useHome } from '../../features/home/useHome';
export default function MapScreen() {
  
  const { data, loading, error, refetch } = useHome();
  const [location, setLocation] = useState(null);
    const navigation = useNavigation()
  useEffect(() => {
    requestLocationPermission();
    
  }, []);

  async function requestLocationPermission() {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } else {
      getCurrentLocation();
    }
  }

  function getCurrentLocation() {
    Geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 15000 }
    );
  }


  if (loading) return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}><ActivityIndicator size="large" /></View>; // Loading state
  if (error) return <Text>{error}</Text>; // Error state


  return (
    <View style={{flex:1}}>
        <View style={styles.header}>
                {/* <Text>  {JSON.stringify(data)}</Text> */}
                <HeaderLogo/>
                <View style={styles.rowContainer}>
                <Language/>      
                <Pressable onPress={()=>navigation.navigate('Notification')}>
                <MaterialIcons name="notifications-none" size={28} />
                </Pressable>

                </View>
        </View>
        <Carousel/>
        <View style={styles.batteryStatusContainer}>
            <View style={styles.rowContainer}>
                <BatterySign/>
                <Text style={styles.txtStyle}>{data?.data.soh}%</Text>
            </View>
             <View style={styles.rowContainer}>
                <Heart/>
                <Text style={styles.txtStyle}>{data?.data.soc}%</Text>
            </View>
                <View style={styles.rowContainer}>
                <Temperature/>
                <Text style={styles.txtStyle}>{data?.data?.temp.toFixed(2)}C</Text>
            </View>
                <View style={styles.rowContainer}>
                <Road/>
                <Text style={styles.txtStyle}>62KM</Text>
            </View>
            <View style={styles.rowContainer}>
                <StopWatch/>
                <Text style={styles.txtStyle}>{data?.data?.timeTravelled.durationMinutes}Hrs</Text>
            </View>
        </View>
      {location ? (
        <>
        <MapView
        provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          showsUserLocation={true} // blue dot
          initialRegion={{
            latitude: data?.data.lat || location.latitude,
            longitude: data?.data.lng || location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={location} title="You are here" />
 
        </MapView>
            <View style={styles.fabContainer}>
            {[
              { icon: 'info', action: () => navigation.navigate('Report') },
              { icon: 'spinner-refresh', action: () => console.log('Zoom Out') },
            ].map((btn, index) => (
              <Pressable
                key={index}
                android_ripple={{ color: 'rgba(255,255,255,0.3)', borderless: false }}
                onPress={btn.action}
                style={({ pressed }) => [
                  styles.fab,
                  { backgroundColor: pressed ? '#0056b3' : '#000000' }
                ]}
              >
                <Fontisto name={btn.icon} size={23} color="#fff" />
        
              </Pressable>
            ))}
          </View>
            <View style={[styles.fabContainer,{top:610}]}>
              <Text style={styles.txtStyle}>*Refreshed 15 mins ago</Text>
            </View>
        </>
      ): <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} />
        <Text>Fetching Location</Text>
        </View>}
    </View>
  );
}


const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    header:{
  
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:10,
        paddingHorizontal:'5%',
    },
    rowContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        gap:5
    },
    batteryStatusContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:10,
        marginVertical:10
    },
    txtStyle:{
        fontWeight:"bold",
        fontSize:15
    },
     fabContainer: {
    position: 'absolute',
    right: 20,
    top: 480,
    alignItems: 'center',
  },
  fab: {
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    elevation: 5,
  },
})