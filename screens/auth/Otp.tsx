import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet, View,Text } from "react-native"
import { OtpInput } from "react-native-otp-entry";
const Otp = () =>{

    const navigation = useNavigation()

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('OtpSucess')
        },2000)
    },[])

    return <View style={styles.container}>
        
        <View style={styles.primaryContainer}>
        <Text style={styles.heading}>Enter OTP</Text>
        <Text style={styles.para}>
        We have sent an OTP to your registered phone +91 999 611 1966 
        </Text>
        </View>
   
        <View style={styles.secondaryContainer}>

            <OtpInput
                numberOfDigits={4}
                focusColor="green"
                autoFocus={false}
                hideStick={true}
                blurOnFilled={true}
                disabled={false}
                type="numeric"
                secureTextEntry={false}
                focusStickBlinkingDuration={500}
                onFocus={() => console.log("Focused")}
                onBlur={() => console.log("Blurred")}
                onTextChange={(text) => console.log(text)}
                onFilled={(text) => console.log(`OTP is ${text}`)}
                textInputProps={{
                    accessibilityLabel: "One-Time Password",
                
                }}
                textProps={{
                    accessibilityRole: "text",
                    accessibilityLabel: "OTP digit",
                    allowFontScaling: false,
                }}
                theme={{
                    containerStyle:{
                        // borderWidth:2
                    },
                    pinCodeContainerStyle:{
                        borderWidth:0,
                        borderBottomWidth:1,
                        borderColor:"#C5C8CE",
                        borderRadius:0
                    }
                }}
                />
            <View style={styles.otpTxt}>
            <Text>The OTP code will expire in 05:00</Text>
            </View>
    </View>
    </View>
}

export default Otp

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:"flex-start",
        marginHorizontal:20,
        padding:10,
        margin:10,
        flex:1
    },
    primaryContainer:{
        flex:1,
        justifyContent:"space-between",
        alignItems:"flex-start"
    },
    secondaryContainer:{
        flex:3,
        marginVertical:'20%'
     },
     otpTxt:{
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20
    },
     
    heading:{
        fontWeight:"400",
        fontSize:38,
        color:"#6C6A69",
        margin:15,
        marginHorizontal:35
    },
    
    para:{
        color:"#404040",
        fontWeight:"400",
        fontSize:15,
        margin:10
    }
})