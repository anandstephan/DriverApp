import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Colors from '../../constants/color';
import Fonts from '../../constants/font';
import Header from '../services/components/Header';

const Payment = () => {
  const [amount, setAmount] = useState('3444');
  const [paymentMethod, setPaymentMethod] = useState('online');
  
  const navigation = useNavigation()

  const totalEmi = 3500;
  const remainingBalance = totalEmi - parseInt(amount || '0');

  return (
    <View style={{flex:1,backgroundColor:Colors.appBackground}}>
      <Header title='Pay Now'/>
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>EMI Amount</Text>
      <Text style={styles.emiAmount}>₹{totalEmi}/Month</Text>

      <Text style={styles.label}>Enter amount</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>Payment Method</Text>
      <View style={styles.radioContainer}>
        <View style={styles.radioOption}>
          <RadioButton
            value="online"
            status={paymentMethod === 'online' ? 'checked' : 'unchecked'}
            onPress={() => setPaymentMethod('online')}
          />
          <Text>Online</Text>
        </View>
        <View style={styles.radioOption}>
          <RadioButton
            value="handcash"
            status={paymentMethod === 'handcash' ? 'checked' : 'unchecked'}
            onPress={() => setPaymentMethod('handcash')}
          />
          <Text>Hand cash</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.balanceContainer}>
        <View>
        <Text style={[styles.label,{fontSize:16,fontFamily:Fonts.poppinsRegular    }]}>Remaining Balance</Text>     
        <Text style={[styles.label,{fontFamily:Fonts.poppinsRegular}]}>EMI Amount   </Text>
        </View>

        <View>
            <View style={{marginTop:30}}/>
        <Text style={styles.remaining}>₹{remainingBalance}</Text>

        </View>

      </View>

      <Pressable style={styles.payButton} onPress={()=>navigation.navigate('summary')}>
        <Text style={styles.payText}>Pay now</Text>
      </Pressable>
    </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.white,
    margin: 20,
    borderRadius: 10,
    // borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily:Fonts.poppinsBold
  },
  emiAmount: {
    fontSize: 22,
    // fontWeight: '600',
    marginBottom: 20,
    color: '#000',
    fontFamily:Fonts.poppinsRegular
  },
  label: {
    fontSize: 14,
    marginTop: 10,
    color: Colors.txtblack,
    // fontWeight:"400",
    fontFamily:Fonts.poppinsBold  
  },
  input: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
    marginTop: 5,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  divider: {
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  remaining: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  payText: {
    fontWeight: 'bold',
    fontSize: 16,
    color:Colors.white
  },
});
