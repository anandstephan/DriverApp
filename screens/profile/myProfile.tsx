import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Colors from '../../constants/color';
import Fonts from '../../constants/font';
import Header from '../services/components/Header';

const MyProfile = () => {
  return (
    <SafeAreaView style={styles.safeArea}>

      <Header title='My Profile'/>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileCard}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../assets/png/driverPic.png')}
              style={styles.profileImage}
              accessibilityLabel="Portrait of man wearing formal shirt, upright pose against blurred dark background with grid texture"
              onError={() => {}}
            />
            <TouchableOpacity style={styles.cameraIconWrapper} activeOpacity={0.7}>
              {/* Simple camera icon with lines */}
              <View style={styles.cameraIcon}>
                <View style={styles.cameraBody} />
                <View style={styles.cameraLens} />
                <View style={styles.cameraFlash} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Driver Name</Text>
            <View style={styles.infoRow}>
              <TextInput style={styles.value} value='Rajesh Kumar'/>
              <Image
              source={require('../../assets/png/circlecheck.png')}
              width={200}
              height={200}
              />
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Driver ID</Text>
            <View style={styles.infoRow}>
              <TextInput style={styles.value} value="FB2011"/>
              <Image
              source={require('../../assets/png/circlecheck.png')}
              width={200}
              height={200}
              />
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Driver Contact Number</Text>
            <View style={styles.infoRow}>
              <TextInput style={styles.value} value="+91 987654321"/>
              <Image
              source={require('../../assets/png/circlecheck.png')}
              width={200}
              height={200}
              />
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Driver Address</Text>
            <View style={styles.infoRow}>
              <TextInput style={styles.value} value="123 Royal street"/>
            <Image
              source={require('../../assets/png/circlecheck.png')}
              width={200}
              height={200}
              />
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Cluster</Text>
            <View style={styles.infoRow}>
              <TextInput style={styles.value} value="Delhi NCR"/>
            <Image
              source={require('../../assets/png/circlecheck.png')}
              width={200}
              height={200}
              /> 
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>City</Text>
            <View style={styles.infoRow}>
              <TextInput style={styles.value} value="Delhi"/>
             <Image
              source={require('../../assets/png/circlecheck.png')}
              width={200}
              height={200}
              />
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>State</Text>
            <View style={styles.infoRow}>
              <TextInput style={styles.value} value="New Delhi"/>
              <Image
              source={require('../../assets/png/circlecheck.png')}
              width={200}
              height={200}
              />
            </View>
          </View>
        </View>

   
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1,
     backgroundColor: Colors.appBackground 
    },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: Colors.appBackground
  },
  profileCard: {
    width: 328,
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 24,
    alignItems: 'stretch',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    backgroundColor: '#bbb',
    position: 'absolute',
    top: -60,
    alignSelf: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  cameraIconWrapper: {
    position: 'absolute',
    bottom: 10,
    right: 14,
    width: 28,
    height: 28,
    backgroundColor: '#fff',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 4,
  },
  cameraIcon: {
    width: 16,
    height: 12,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraBody: {
    width: 12,
    height: 10,
    backgroundColor: '#555',
    borderRadius: 2,
  },
  cameraLens: {
    width: 6,
    height: 6,
    backgroundColor: '#AAA',
    borderRadius: 3,
    position: 'absolute',
    left: 3,
    top: 2,
  },
  cameraFlash: {
    width: 3,
    height: 5,
    backgroundColor: '#666',
    borderRadius: 1,
    position: 'absolute',
    right: 0,
    top: 3,
  },

  infoItem: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: '#777',
    marginBottom: 4,
    fontFamily:Fonts.poppinsRegular
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth:0.2,
 },
  value: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    marginVertical:2
  },



});

export default MyProfile;

