import { useState } from "react";
import { StyleSheet, View,Text, TextInput, Pressable } from "react-native"
import { Dropdown } from 'react-native-element-dropdown';
import Feather from 'react-native-vector-icons/Feather'
import CustomModal from "./components/CustomModal";
import Colors from "../../constants/color";
import Fonts from "../../constants/font";
import Header from "./components/Header";


const data = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Mango', value: 'mango' },
    { label: 'Grapes', value: 'grapes' },
  ];
  
const CreateTicket = () =>{

    const [value, setValue] = useState(null);
    const [visible,setVisible] = useState(false)
return <View style={styles.container}>

  

    <Header title="Raise Ticket" />
    <View style={styles.innerContainer}>
        <Text style={styles.txt}>Select Ticket Type</Text>
         <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder="Select fruit"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    <Text style={styles.txt}>Add a Brief Description</Text>
    <TextInput
    style={styles.inputStyle}
    multiline={true}
    />
    <View style={styles.uploadStyle}>
            <View style={styles.circle}>
                <Feather name="upload" size={30} color={"#656565"}/>
            </View>
            <Text style={styles.txt}>Upload</Text>
            <Text style={styles.txt}>Video, Photo</Text>
    </View>
    
    </View>
    <Pressable style={styles.btnContainer} onPress={()=>setVisible(!visible)}>
        <Text style={styles.btnTxt}>Submit</Text>
    </Pressable>
    <CustomModal visible={visible} onClose={()=>setVisible(!visible)}/>
</View>
}

export default CreateTicket

const styles = StyleSheet.create({
    container:{
        // margin:10,
        padding:10,
        backgroundColor:Colors.appBackground,
        flex:1
       },
       txt:{
        fontWeight:"400",
        color:"#585858",
        marginVertical:5,
        fontFamily:Fonts.poppinsRegular
       },
       txtStyle:{
          fontWeight:"600",
          fontSize:18 
       },
       innerContainer:{
        backgroundColor:Colors.white,
        padding: 16,
        margin:10,
        borderRadius:15,
        marginVertical:'12%'
  
       },
       dropdown: {
        height: 40,
        borderColor: '#CDCDCD',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor:"#FFF"
      },
      placeholderStyle: {
        fontSize: 16,
        color: '#999',
      },
      selectedTextStyle: {
        fontSize: 16,
        color: '#000',
      },
      inputStyle:{
        backgroundColor:Colors.white,
        padding:10,
        margin:5,
        height:120,
        borderRadius:15,
        borderColor:"#CDCDCD",
        borderWidth:1
      },
      uploadStyle:{
        backgroundColor:"#F4F4F4",
        borderWidth:2,
        borderStyle:"dotted",
        borderColor:"#FFF",
        marginVertical:10,
        justifyContent:"center",
        alignItems:'center',
        padding:20,
        borderRadius:10,
        // fontFamily:Fonts.poppinsLight
      },
      circle:{
        borderRadius:100,
        padding:10,
        backgroundColor:"#D3D3D3"
      },
      btnContainer:{
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:Colors.secondary,
        padding:15,
        marginHorizontal:10,
        borderRadius:10
      },
      btnTxt:{
        color:"#FFF",
        fontWeight:"600",
        fontFamily:Fonts.poppinsRegular
      }
})