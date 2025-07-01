import { StyleSheet, View ,Text} from "react-native"
import Lock from "../../assets/jsx/Lock"
const OtpSucess = () =>{
return <View style={styles.container}>
        <View style={{flex:2}}/>
        <View style={{flex:1}}>
        <Lock/>
        </View>
        <View style={{flex:3,alignItems:"center"}}>
        <Text style={styles.heading}>OTP Verified Successfully</Text>
        <Text style={styles.txtStyle}>OTP has been verified successfully, you can proceed with complete registration</Text>        
        </View>   

</View>
}

export default OtpSucess

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"#FFFFFF"
    },
    heading:{
        fontWeight:"400",
        fontSize:22,
        lineHeight:32,
        color:"#101010"
    },
    txtStyle:{
        color:"#878787",
        textAlign:"center",
        marginHorizontal:20,
        fontWeight:"400",
        fontSize:14
    }
})