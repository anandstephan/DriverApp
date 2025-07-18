import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Pressable } from 'react-native';
import Header from './components/Header';
import Colors from '../../constants/color';
import Fonts from '../../constants/font';

const data = [
  { id: '1', date: '11 - 04 - 25', type: 'Battery', status: 'Open' },
  { id: '2', date: '11 - 04 - 25', type: 'Battery', status: 'Open' },
  { id: '3', date: '11 - 04 - 25', type: 'Charger', status: 'Closed' },
  { id: '4', date: '11 - 04 - 25', type: 'Battery', status: 'Closed' },
];

const ViewTicket = () => {

    const navigation = useNavigation()

  const renderItem = ({ item }: any) => (
    <Pressable onPress={()=>navigation.navigate('batteryStatus')}>
    <View
      style={[
        styles.card,
        item.status === 'Open' ? styles.openBorder : styles.closedBorder,
      ]}
    >
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.type}</Text>
      <Text
        style={styles.cell}
      >
        {item.status}
      </Text>
    </View>
    </Pressable>
  );

  return (
    <View style={styles.outerContainer}>
      <Header title='View Ticket'/>
      <View style={styles.container}>
      <Text style={styles.heading}>History</Text>
      <View style={styles.header}>
        <Text style={[styles.cell, styles.headerText]}>Date</Text>
        <Text style={[styles.cell, styles.headerText]}>Type</Text>
        <Text style={[styles.cell, styles.headerText]}>Status</Text>
      </View>
      <View style={{height:Dimensions.get('window').width/1.5}}>
      <FlatList
        style={styles.listBackground}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      </View>
    </View>
    </View>
 
  );
};

const styles = StyleSheet.create({
  outerContainer:{
    flex:1,
    backgroundColor:Colors.appBackground
  },
  container: {
    margin: 16,
    backgroundColor: Colors.appBackground,
    borderRadius: 15,
    padding: 12,
    marginTop:30
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
    backgroundColor:Colors.secondary,
    // width:"100%",
    padding:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    color:Colors.white,
    fontFamily:Fonts.poppinsRegular
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginTop:-10,
    backgroundColor:Colors.white,
    
  },
  headerText: {
    fontWeight: '400',
    color:Colors.txt
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    paddingVertical: 15,
    paddingHorizontal: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  openBorder: {
    // borderWidth: 1.5,
    // borderColor: '#007AFF',
  },
  closedBorder: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  cell: {
    width: '30%',
    fontSize: 14,
    textAlign: 'center',
    fontFamily:Fonts.poppinsRegular
  },
  listBackground:{
    backgroundColor:Colors.white,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30,
  }
});

export default ViewTicket;
