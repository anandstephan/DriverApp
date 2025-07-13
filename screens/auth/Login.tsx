import { useNavigation } from "@react-navigation/native"
import { View,Text,StyleSheet, TextInput, Pressable } from "react-native"
import Logo from "../../assets/jsx/Logo"
import Fonts from "../../constants/font"
import Colors from "../../constants/color"

const Login = () =>{
    const navigation = useNavigation()
return <View style={styles.container}>
    <View>
    <Logo/>
    </View>
        <Text style={styles.heading}>Login</Text>
    <View style={styles.primaryContainer}>

        <View style={styles.form}>
            <Text style={styles.headingText}>Driver ID</Text>
            <TextInput style={styles.input}/>
        </View>
        <View style={[styles.form]}>
            <Text style={styles.headingText}>Password</Text>
            <TextInput style={styles.input} keyboardType="visible-password" />
        </View>
        <View style={[styles.form,{marginTop:0,marginLeft:20}]}>
            <Text style={{color:"#00031480",fontWeight:"400",fontSize:14,fontFamily:Fonts.poppinsLight}}>Forgot Password</Text>
            <View style={{width:'35%',borderWidth:0.5,borderColor:"#00031480"}}/>
        </View>
        <View style={styles.btnContainer}>
            <Pressable onPress={()=>navigation.navigate('Otp')}>
                <Text style={{color:"#000000",fontFamily:Fonts.poppinsRegular}}>Login with OTP</Text>
                <View style={{borderWidth:0.5,borderColor:"#000000"}}/>
            </Pressable>
            <Pressable style={styles.btn}>
                <Text style={{ color:"#FFFFFF",fontFamily:Fonts.poppinsRegular}}>Login</Text>
            </Pressable>
        </View>
    </View>
   
</View>
}

export default Login

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
        borderRadius:10,
        // marginHorizontal:2,
    
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
        color:"#2F343E",
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
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        margin:10,
        padding:10,
        marginTop:'10%',
        marginHorizontal:13
        // width:"95%",
    },
    btn:{
        
        padding:13,
        width:'40%',
        justifyContent:"center",
        alignItems:"center",
        margin:10,
        backgroundColor:Colors.primary,
        borderRadius:20
       
    },
    headingText:{
        fontWeight:"400",
        fontSize:15,
        fontFamily:Fonts.poppinsRegular
    }
})