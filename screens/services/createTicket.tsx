import { useState } from "react";
import { StyleSheet, View,Text, TextInput, Pressable, Alert, Image } from "react-native"
import { Dropdown } from 'react-native-element-dropdown';
import Feather from 'react-native-vector-icons/Feather'
import CustomModal from "./components/CustomModal";
import Colors from "../../constants/color";
import Fonts from "../../constants/font";
import Header from "./components/Header";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import { useS3Upload } from "../../features/upload/useUpload";
import { useCreateTicket } from "../../features/createTicket/useCreateTicket";
import Entypo from "react-native-vector-icons/Entypo";
import { useTranslation } from "react-i18next";
const data = [
    { label: 'Temperature', value: 'Temperature' },
    { label: 'BMS', value: 'BMS' },
    { label: 'Battery General Issue', value: 'Battery General Issue' },
    { label: 'Battery Performance Issue', value: 'Battery Performance Issue' },
    {label:"Battery Mechnical Issue",value:"Battery Mechnical Issue"},
    {label:"Charger Issue",value:"Charger Issue"}
  ];
  
const CreateTicket = () =>{

    const [value, setValue] = useState(null);
    const [visible,setVisible] = useState(false)
    const [file, setFile] = useState(null);
    const [desc,setDesc] = useState('')
    const [uploadedFile,setUploadedFile] = useState(null)
    const {t} = useTranslation()
  const {upload} = useS3Upload()

  const {handleCreateTicket,loading} = useCreateTicket()

  const pickDocument = async () => {
    try {
      const res = await launchImageLibrary({
        mediaType:"photo"
      })
      console.log("res",res)
      
      // res ek array return karta hai
      if (res && res.assets?.length > 0) {
        setFile(res?.assets[0]);
      const newresponse = await  upload(res?.assets[0],"tickets","driverApp")
      setUploadedFile(newresponse.fileUrl)
      }
    } catch (err) {
      console.log("error",err)
    }
  };


  const onSubmitHandler = () =>{
    handleCreateTicket({
      description:desc,
      ticketType:value,
      media:uploadedFile
    },(res) =>{
      console.log("---->",res)
    })
    setVisible(!visible)
  }

return <View style={styles.container}>

  

    <Header title={t('raiseTicket')} />
    <View style={styles.innerContainer}>
        <Text style={styles.txt}>{t('selectTicketType')}</Text>
         <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder="Select Issue"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    <Text style={styles.txt}>{t('addBriefDescription')}</Text>
    <TextInput
    style={styles.inputStyle}
    multiline={true}
    value={desc}
    onChangeText={txt => setDesc(txt)}
    />
    {
      file ?
      <View> 
      <Image
      source={{uri:file.uri}}

      style={{
        height:180,
        width:"100%",
        marginTop:10
      }}
      />
      <Pressable style={{
        position:"absolute",
        left:'90%',
        top:'10%'
      }}
      onPress={()=>setFile(null)}
      >
      <Entypo name="circle-with-cross" size={25} />
      </Pressable>
      </View>
      :     <Pressable onPress={pickDocument}>
    <View style={styles.uploadStyle}>
            <View style={styles.circle}>
                <Feather name="upload" size={30} color={"#656565"}/>
            </View>
            <Text style={styles.txt}>{t('upload')}</Text>
            <Text style={styles.txt}>{t('video')}, {t('photo')}</Text>
    </View>
    </Pressable>
    }

    </View>
    <Pressable style={styles.btnContainer} onPress={onSubmitHandler}>
        <Text style={styles.btnTxt}>{t('submit')}</Text>
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
        borderWidth:1,
      textAlignVertical: "top",
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