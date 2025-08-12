import { View,Text,StyleSheet, Pressable, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Fonts from "../../constants/font"
import Colors from "../../constants/color"
import SmallLogo from "../../assets/jsx/smallLogo"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toggleDarkMode } from "../../store/themeSlice"

const Initial = () =>{

    const navigation = useNavigation()
    const dispatch = useDispatch()

    useEffect(()=>{
        async function getDriverInfo(){
        // dispatch(toggleDarkMode())
                
 
        }
        getDriverInfo()
    },[])


  return  <ImageBackground
        source={require('../../assets/png/splash.png')}
        style={styles.backgroundImg}
         resizeMode="cover"
        >
            <View style={{flex:1}}/>
            <View style={{flex:1}}/>
             <View style={{flex:1}}/>
            <View style={{flex:1}}/>
             <View style={styles.actionSheetContainer}>
                <Text style={styles.heading}>Drive the Future, Power the Change</Text>
                <Text style={styles.subHeading}>Welcome to India's EV Revolution for {'\n'} e-Rickshaws <View style={{height:11}}><SmallLogo/></View></Text>
                <View style={styles.btnContainer}>
                 <Pressable style={styles.btn} onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.btnTxt}>Log in</Text>
                </Pressable>
                <Pressable style={[styles.btn,{backgroundColor:Colors.secondary}]} onPress={()=>navigation.navigate('Register')}>
                    <Text style={styles.btnTxt}>Signup</Text>
                </Pressable>
                </View>
            </View>
        </ImageBackground>

}

export default Initial

const styles = StyleSheet.create({

    backgroundImg:{
        flex:1,
        width:"100%",
        height:"72%",
    },
    btnContainer:{
        justifyContent:"center",
        alignItems:"center"
    },
    btn:{
        padding:15,
        width:'80%',
        justifyContent:"center",
        alignItems:"center",
        margin:10,
        backgroundColor:Colors.primary,
        borderRadius:20,
    },
    btnTxt:{
        fontFamily:Fonts.poppinsLight,
        fontSize:20,
        
    },
    actionSheetContainer:{
        flex:2,
        borderTopLeftRadius:70,
        borderTopRightRadius:70,
        justifyContent:"flex-end",
        backgroundColor:"#FBFDFE"
        // height:"100%"
    },
    heading:{
        fontSize:20,
        textAlign:"center",
        fontFamily:Fonts.poppinsBold
    },
    subHeading:{
        textAlign:'center',
        fontWeight:"500",
        fontSize:15,
        justifyContent:'center',
        alignItems:'center',
        fontFamily:Fonts.poppinsRegular
    }
})