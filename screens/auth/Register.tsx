import { useNavigation } from "@react-navigation/native"
import { View,Text,StyleSheet, TextInput, Pressable,Switch } from "react-native"
import Logo from "../../assets/jsx/Logo"
import Fonts from "../../constants/font"
import Colors from "../../constants/color"
import { useState } from "react"
import { useSignup } from "../../features/signup/useSignup"

const Register = () =>{
    const navigation = useNavigation()

  const [checked, setChecked] = useState(false);

  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [interestedIn,setInterestedIn] = useState('')
  const {handleSignup,loading} =useSignup()

  const onSubmitHandler = () =>{

    handleSignup({name,phone,interestedIn},()=>{
    navigation.navigate('RegisterSucess')
    })

  }


return <View style={styles.container}>
    <View>
    <Logo/>
    </View>
    <Text style={styles.heading}>Register</Text>
    <View style={styles.primaryContainer}>
        <View style={styles.form}>
            <Text style={styles.headingText}>Name</Text>
            <TextInput style={styles.input} placeholder="Enter Your Name" onChangeText={e => setName(e)} value={name} />
        </View>
        <View style={[styles.form,{marginTop:'5%'}]}>
            <Text style={styles.headingText}>Mobile Number</Text>
            <TextInput style={styles.input} placeholder="Enter Your Number" onChangeText={e => setPhone(e)} value={phone}/>
        </View>
        <View style={[styles.form,{marginTop:'5%'}]}>
            <Text style={styles.headingText}>Products Interested in</Text>
            <TextInput style={styles.input} placeholder="Chose Multiple" onChangeText={e => setInterestedIn(e)} value={interestedIn}/>
        </View>
        <View style={[styles.form,{marginTop:0,flexDirection:"row",justifyContent:"flex-start",alignItems:'center'}]}>
        <Switch
        value={checked}
        onValueChange={setChecked}
        thumbColor={checked ? '#6200ee' : '#ccc'}
      />
            <Text style={{color:"#00031480",fontWeight:"400",fontSize:14,fontFamily:Fonts.poppinsLight}}>Agree to Terms & Conditions</Text>
            {/* <View style={{borderWidth:0.5,borderColor:"#00031480",width:"38%",marginHorizontal:'18%'}}/> */}
        </View>
        <View style={styles.btnContainer}>
        
            <Pressable style={styles.btn} onPress={onSubmitHandler}>
                <Text style={{ color:"#FFFFFF",fontSize:16,fontWeight:"400"}}>Submit</Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.txtStyle}>Already have an account? <Text style={styles.underlineTxt}>Sign in</Text></Text>
            </Pressable>
        </View>
    </View>
   
</View>
}

export default Register

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:"flex-start",
        marginHorizontal:20,
        padding:10,
        margin:10
    },  
    primaryContainer:{
        width:"100%",
        marginVertical:'10%',
        backgroundColor:"#FFFFFF",
        borderRadius:10
    
    },
    logo:{
        color:"#A4A4A4",
        fontWeight:"800",
        fontSize:36,
        fontStyle:"italic",
        marginVertical:'10%'
    },
    heading:{
        fontWeight:"400",
        fontSize:32,
        color:"#131212",
        fontFamily:Fonts.poppinsBold,
        margin:5
    },
    input:{
        borderColor:"#CBD3DF",
        borderWidth:1,
        padding:20,
        margin:10,
        height:30,
        borderRadius:10
    },
    form:{
        textAlign:"center",
        width:"95%",
        marginTop:'5%',
        marginLeft:10
        
    },
    btnContainer:{
        // flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        margin:10,
        padding:10,
        marginTop:'10%',
        // marginHorizontal:13
        // width:"95%",
    },
    btn:{
        
        padding:15,
        width:'100%',
        justifyContent:"center",
        alignItems:"center",
        margin:10,
        backgroundColor:Colors.secondary,
        borderRadius:20,
       
    },
    txtStyle:{
        fontSize:14,
        fontFamily:Fonts.poppinsLight
    },
    underlineTxt:{
        color:Colors.primary
    },
    headingText:{
        fontWeight:"400",
        fontSize:15,
        fontFamily:Fonts.poppinsRegular
    }
})