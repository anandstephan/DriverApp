import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useProfile } from '../../../features/myprofile/useProfile';
const  Header = () => {
  const navigation = useNavigation()
        const {profile} = useProfile()
    console.log("++++",profile?.batteryId)
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <Pressable style={styles.backButton} onPress={()=>{
        // Alert.alert("kk","kkkkk")
        console.log("===")
        navigation.goBack()
      }}>
        <Ionicons name='arrow-back-sharp' size={25} color={'#FFFFFF'}/>
        <Text style={styles.backText}>Back</Text>
      </Pressable>

      {/* ID in center */}
      <Text style={styles.title}>{profile?.batteryId}</Text>

      {/* Right Icons */}
      <View style={styles.rightIcons}>
        {/* Square Icon */}
        <TouchableOpacity style={styles.iconBox}>
        <Feather name="copy" size={25} color={'#FFFFFF'}/>
        </TouchableOpacity>

        {/* Share Icon */}
        <TouchableOpacity style={styles.iconBox}>
        <Feather name="share-2" size={25} color={'#FFFFFF'}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header
const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // marginHorizontal:10
  },
  backButton: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    margin:10
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    position: 'absolute',
    alignSelf: 'center',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    marginLeft: 15,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    resizeMode: 'contain',
  },
});
