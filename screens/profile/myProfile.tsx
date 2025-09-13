import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Colors from '../../constants/color';
import Fonts from '../../constants/font';
import Header from '../services/components/Header';
import { useProfile } from '../../features/myprofile/useProfile';
import { ProfileTab } from '../../features/myprofile/type';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import { useS3Upload } from '../../features/upload/useUpload';
import { useTranslation } from 'react-i18next';

const MyProfile = () => {

  const { profile, loading, error, refetch } = useProfile();
  

  const {t} = useTranslation()

  const [profileTab,setProfileTab] = useState<ProfileTab>({
    name:'',
    driverId:"",
    phone:"",
    address:"",
    cluster:"",
    city:"",
    state:"",
    profilePic:""
  })

      const [file, setFile] = useState(null);
    const [uploadedFile,setUploadedFile] = useState(null)
        const {upload} = useS3Upload()

    const pickDocument = async () => {
    try {
      const res = await launchImageLibrary({
        mediaType:"photo"
      })
      
      // res ek array return karta hai
      if (res && res.assets?.length > 0) {
        setFile(res?.assets[0]);
      const newresponse = await  upload(res?.assets[0],"selfie","driverApp")
      console.log("newres",newresponse)
        
      setUploadedFile(newresponse.fileUrl)
      Alert.alert("Pic","Pic uploaded Successfully")
      setProfileTab({...profileTab,profilePic:newresponse.fileUrl})
      }
    } catch (err) {
      console.log("error",err)
      Alert.alert("Message","File is too Large!")
    }
  };

useEffect(() => {
  if (profile) {

    setProfileTab({
      name: profile?.driver.firstName+" "+profile?.driver?.lastName ?? '',
      driverId: profile?.driver?.driverId ?? '',
      phone: profile?.driver?.phone ?? '',
      address: profile?.driver?.address ?? '',
      cluster: profile?.driver?.cluster ?? '',
      city: profile?.driver?.city ?? '',
      state: profile?.driver?.state ?? '',
      profilePic:profile?.driver?.selfie??""
    });
  }
}, [profile]);


  if (loading) {
    return (
      <SafeAreaView style={[styles.safeArea, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={[styles.safeArea, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </SafeAreaView>
    );
  }


  return (
    <SafeAreaView style={styles.safeArea}>

      <Header title={t('profile')}/> 
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileCard}>
          
          <View style={styles.imageWrapper}>
            {
              profileTab.profilePic.length!==0 ?             
              <Image
              source={{uri:profileTab.profilePic}}
              style={styles.profileImage}
              accessibilityLabel="Portrait of man wearing formal shirt, upright pose against blurred dark background with grid texture"
              onError={() => {}}
            />:
              <Image
              source={require('../../assets/png/driverPic.png')}
              style={styles.profileImage}
              accessibilityLabel="Portrait of man wearing formal shirt, upright pose against blurred dark background with grid texture"
              onError={() => {}}
            />
            }
        
            <TouchableOpacity style={styles.cameraIconWrapper} activeOpacity={0.7} onPress={pickDocument}>
              {/* Simple camera icon with lines */}
              <View style={styles.cameraIcon}>
                <View style={styles.cameraBody} />
                <View style={styles.cameraLens} />
                <View style={styles.cameraFlash} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>{t('driverName')}</Text>
            <View style={styles.infoRow}>
              <TextInput style={styles.value} value={profileTab.name} />
              <Image
              source={require('../../assets/png/circlecheck.png')}
              width={200}
              height={200}
              />
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>{t('driverId')}</Text>
            <View style={styles.infoRow}>
              <TextInput style={styles.value} value={profileTab.driverId}/>
              <Image
              source={require('../../assets/png/circlecheck.png')}
              width={200}
              height={200}
              />
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>{t('driverContactNumber')}</Text>
            <View style={styles.infoRow}>
              <TextInput style={styles.value} value={profileTab.phone}/>
              <Image
              source={require('../../assets/png/circlecheck.png')}
              width={200}
              height={200}
              />
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>{t('driverAddress')}</Text>
            <View style={styles.infoRow}>
              <TextInput style={styles.value} value={profileTab.address}/>
            <Image
              source={require('../../assets/png/circlecheck.png')}
              width={200}
              height={200}
              />
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>{t('cluster')}</Text>
            <View style={styles.infoRow}>
              <TextInput style={styles.value} value={profileTab.cluster}/>
            <Image
              source={require('../../assets/png/circlecheck.png')}
              width={200}
              height={200}
              /> 
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>{t('city')}</Text>
            <View style={styles.infoRow}>
              <TextInput style={styles.value} value={profileTab.city}/>
             <Image
              source={require('../../assets/png/circlecheck.png')}
              width={200}
              height={200}
              />
            </View>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>{t('state')}</Text>
            <View style={styles.infoRow}>
              <TextInput style={styles.value} value={profileTab.state}/>
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

    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: Colors.appBackground,
   
  
  },
  profileCard: {
    width: 328,
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingTop: 100,
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
    width: 100,
    height: 100,
    borderRadius: 60,
    overflow: 'hidden',
    backgroundColor: '#bbb',
    position: 'absolute',
    top: -20,
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

