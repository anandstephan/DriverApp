import { StyleSheet, View ,Text} from "react-native"
import Lock from "../../assets/jsx/Lock"
import Check from "../../assets/jsx/Check"
import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import Fonts from "../../constants/font"
const ReigsterSucess = () =>{
    const navigation = useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('TrackRegistration')
        })
    },[])
return <View style={styles.container}>
        <View style={{flex:2}}/>
        <View style={{flex:1}}>
        <Check/>
        </View>
        <View style={{flex:3,alignItems:"center",marginHorizontal:10}}>
        <Text style={styles.heading}>Registered Successfully </Text>
        <Text style={styles.txtStyle}>Our Team will contact you shortly! Meanwhile browse our offerings </Text>        
        </View>   

</View>
}

export default ReigsterSucess

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
        color:"#101010",
        marginVertical:10,
        fontFamily:Fonts.poppinsRegular
    },
    txtStyle:{
        color:"#878787",
        textAlign:"center",
        marginHorizontal:20,
        fontWeight:"400",
        fontSize:14,
        fontFamily:Fonts.poppinsRegular
    }
})