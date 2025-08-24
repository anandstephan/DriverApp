import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import Fonts from '../../../constants/font';
import Colors from '../../../constants/color';

interface ModalProps{
    visible:boolean;
    onClose:()=>void
}

const CustomModal = ({ visible, onClose }:ModalProps) =>{
return  <Modal
visible={visible}
transparent
animationType="fade"
onRequestClose={onClose}
>
<View style={styles.overlay}>
  <View style={styles.modalContainer}>
    <View style={{marginLeft:"90%"}}>
      <Pressable onPress={onClose}>
      <Entypo name='cross' size={28} color="black"/>
    </Pressable>
    </View>
    <View style={styles.checkCircle}>
      <AntDesign name="check" size={28} color="black" />
    </View>
    <Text style={styles.message}>Service Registered</Text>
  </View>
</View>
</Modal>
}

export default CustomModal

const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.3)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '80%',
      backgroundColor: Colors.white,
      borderRadius: 20,
      paddingVertical: 30,
      paddingHorizontal: 20,
      borderColor: '##D9D9D9', // iOS-style blue
      borderWidth: 0.3,
      alignItems: 'center',
    },
    checkCircle: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: Colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
      elevation: 5,
    },
    message: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
      fontFamily:Fonts.poppinsRegular
    },
  });