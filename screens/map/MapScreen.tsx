import React, { useEffect, useState } from 'react';
import { View, PermissionsAndroid, Platform, ActivityIndicator, StyleSheet,Text, Image } from 'react-native';
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HeaderLogo from '../../assets/jsx/HeaderLogo';
import Language from '../../assets/jsx/Language';
import BatterySign from '../../assets/jsx/BatterySign';
import Heart from '../../assets/jsx/Heart';
import Temperature from '../../assets/jsx/Temperature';
import Road from '../../assets/jsx/Road';
import StopWatch from '../../assets/jsx/StopWatch';
export default function MapScreen() {
  const [location, setLocation] = useState(null);

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

  return (
    <View style={{flex:1}}>
        <View style={styles.header}>

                <HeaderLogo/>
                <View style={styles.rowContainer}>
                <Language/>      
                <MaterialIcons name="notifications-none" size={28} />
                </View>
        </View>
        <View style={styles.batteryStatusContainer}>
            <View style={styles.rowContainer}>
                <BatterySign/>
                <Text>95%</Text>
            </View>
             <View style={styles.rowContainer}>
                <Heart/>
                <Text>100%</Text>
            </View>
                <View style={styles.rowContainer}>
                <Temperature/>
                <Text>45C</Text>
            </View>
                <View style={styles.rowContainer}>
                <Road/>
                <Text>62KM</Text>
            </View>
            <View style={styles.rowContainer}>
                <StopWatch/>
                <Text>5.3Hrs</Text>
            </View>
        </View>
      {location ? (
        <MapView
        provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          showsUserLocation={true} // blue dot
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={location} title="You are here" />
        </MapView>
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
        marginHorizontal:10
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
        marginHorizontal:10
    }
})