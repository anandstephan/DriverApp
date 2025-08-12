import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Pressable } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
const Notification = ()=> {
    const navigation = useNavigation()
  const events = [
    {
      type: 'alert',
      title: 'Alert Name!',
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo...',
      button: 'Take Action',
    },
    {
      icon: require('../../assets/png/Employee.png'), // replace with your asset
      title: 'Service Request Approved',
      time: '10 min ago',
    },
    {
      icon: require('../../assets/png/Tick.png'), // replace with your asset
      title: 'EMI for 11th July Marked as Paid!',
      time: '22 min ago',
    },
    {
      date: '04th May',
    },
    {
      icon: require('../../assets/png/Therometer.png'), // replace with your asset
      title: 'High Battery Temperature Detected',
      time: '10 min ago',
    },
    {
      icon: require('../../assets/png/LowBattery.png'), // replace with your asset
      title: 'Battery is low. Need charging',
      time: '10 min ago',
    },
  ];

  return (
    <View style={styles.container}>
        <Pressable onPress={()=>navigation.goBack()}>
                      <Ionicons name='arrow-back-sharp' size={25} color={'#000000'}/>
                      </Pressable>

        <Text style={styles.txtHeading}>Notifications (14)</Text>
        <Text style={styles.txtPara}>Today</Text>
    <ScrollView>
      {events.map((item, index) => {
        if (item.type === 'alert') {
          return (
            <View key={index} style={styles.alertCard}>
              <View style={styles.alertHeader}>
                <Text style={styles.alertIcon}>⚠️</Text>
                <Text style={styles.alertTitle}>{item.title}</Text>
              </View>
              <Text style={styles.alertDesc}>{item.desc}</Text>
              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionText}>{item.button} →</Text>
              </TouchableOpacity>
            </View>
          );
        }
        if (item.date) {
          return (
            <Text key={index} style={styles.dateText}>
              {item.date}
            </Text>
          );
        }
        return (
          <View key={index} style={styles.eventRow}>
            <Image source={item.icon} style={styles.eventIcon} />
            <View style={styles.eventTextContainer}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventTime}>{item.time}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>        
    </View>

  );
}

export default Notification

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    flex:1
  },
  alertCard: {
    backgroundColor: '#FCDADA',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  alertIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  alertDesc: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
  },
  actionBtn: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  actionText: {
    color: '#000',
    fontWeight: '600',
  },
  dateText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3A86FF',
    marginVertical: 8,
  },
  eventRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  eventIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginRight: 12,
  },
  eventTextContainer: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  eventTime: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  txtHeading:{
    fontWeight:"400",
    color:"#000",
    fontSize:24,
    marginBottom:10
  },
  txtPara:{
    color:"#03354E",
    fontSize:18,
    fontWeight:"400"
  }
});
