import { useNavigation } from "@react-navigation/native"
import { View,Text,StyleSheet, TextInput, Pressable } from "react-native"

const Register = () =>{
    const navigation = useNavigation()
return <View style={styles.container}>
    <View>
    <Text style={styles.logo}>LOGO</Text>
    </View>

    <View style={styles.primaryContainer}>
        <Text style={styles.heading}>Register</Text>
        <View style={styles.form}>
            <Text>Name</Text>
            <TextInput style={styles.input} placeholder="Enter Your Nmae"/>
        </View>
        <View style={[styles.form,{marginTop:'5%'}]}>
            <Text>Mobile Number</Text>
            <TextInput style={styles.input} placeholder="Enter Your Number"/>
        </View>
        <View style={[styles.form,{marginTop:'5%'}]}>
            <Text>Products Interested in</Text>
            <TextInput style={styles.input} placeholder="Chose Multiple"/>
        </View>
        <View style={[styles.form,{marginTop:0,marginLeft:20}]}>

            <Text style={{color:"#00031480",fontWeight:"400",fontSize:14}}>Agree to Terms & Conditions</Text>
            <View style={{width:'35%',borderWidth:0.5,borderColor:"#00031480"}}/>
        </View>
        <View style={styles.btnContainer}>
        
            <Pressable style={styles.btn}>
                <Text style={{ color:"#FFFFFF"}}>Submit</Text>
            </Pressable>
            <Text style={styles.txtStyle}>Already have an account? <Text style={styles.underlineTxt}>Sign in</Text></Text>
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
        color:"#131212"
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
        marginTop:'15%',
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
        backgroundColor:"#D9D9D9",
        borderRadius:20
       
    },
    txtStyle:{
        fontSize:14
    },
    underlineTxt:{
        color:"#DADADA"
    }
})