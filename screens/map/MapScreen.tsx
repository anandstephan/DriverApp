import React, { useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Pressable } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from 'react-native-vector-icons/Fontisto';
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
import { useTranslation } from "react-i18next";
import i18n from '../../src/i18n';

export default function MapScreen() {
  const { data, loading, error } = useHome();
  const [location, setLocation] = useState(null);
  const mapRef = useRef(null);
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  // ✅ set location from API data
  useEffect(() => {
    if (data?.data) {
      setLocation({
        latitude: data.data.lat,
        longitude: data.data.lng,
      });

      // animate map when api data arrives
      if (mapRef.current) {
        mapRef.current.animateToRegion(
          {
            latitude: data.data.lat,
            longitude: data.data.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
          1000
        );
      }
    }
  }, [data]);

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    if (currentLang.startsWith("en")) {
      i18n.changeLanguage("hi");
    } else {
      i18n.changeLanguage("en");
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) return <Text>{error}</Text>;

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <HeaderLogo />
        <View style={styles.rowContainer}>
          <Pressable onPress={toggleLanguage}>
            <Language />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Notification')}>
            <MaterialIcons name="notifications-none" size={28} />
          </Pressable>
        </View>
      </View>

      {/* Carousel */}
      <Carousel />

      {/* Battery Info */}
      <View style={styles.batteryStatusContainer}>
        <View style={styles.rowContainer}>
          <BatterySign />
          <Text style={styles.txtStyle}>{data?.data.soc}%</Text>
        </View>
        <View style={styles.rowContainer}>
          <Heart />
          <Text style={styles.txtStyle}>{data?.data.soh}%</Text>
        </View>
        <View style={styles.rowContainer}>
          <Temperature />
          <Text style={styles.txtStyle}>{data?.data?.temp.toFixed(2)}C</Text>
        </View>
        <View style={styles.rowContainer}>
          <Road />
          <Text style={styles.txtStyle}>{data?.data?.totalDistanceTravelled}Kms</Text>
        </View>
        <View style={styles.rowContainer}>
          <StopWatch />
          <Text style={styles.txtStyle}>
            {data?.data?.timeTravelled.durationString}
          </Text>
        </View>
      </View>

      {/* Map */}
      {location ? (
        <>
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1 }}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={location} title="You are here" />
          </MapView>

          {/* FAB buttons */}
          <View style={styles.fabContainer}>
            {[
              { icon: 'info', action: () => navigation.navigate('Report', { data: data?.data }) },
              { icon: 'spinner-refresh', action: () => navigation.navigate('Report', { data: data?.data, isFlag: true }) },
            ].map((btn, index) => (
              <Pressable
                key={index}
                android_ripple={{ color: 'rgba(255,255,255,0.3)', borderless: false }}
                onPress={btn.action}
                style={({ pressed }) => [
                  styles.fab,
                  { backgroundColor: pressed ? '#0056b3' : '#000000' },
                ]}
              >
                <Fontisto name={btn.icon} size={23} color="#fff" />
              </Pressable>
            ))}
          </View>

          <View style={[styles.fabContainer, { top: 700 }]}>
            <Text style={styles.txtStyle}>*Refreshed 15 mins ago</Text>
          </View>
        </>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} />
          <Text>Fetching API Location</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: '2%',
    marginTop: 10,
    marginVertical: 10,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  batteryStatusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  txtStyle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  fabContainer: {
    position: 'absolute',
    right: 20,
    top: 580,
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
});
