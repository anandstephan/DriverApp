import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fonts from '../../../constants/font';

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
      backgroundColor: '#F3F3F3',
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
      backgroundColor: '#76A950',
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