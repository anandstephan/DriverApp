import { Image, StyleSheet, Text, View } from "react-native"
import Card from "./components/Card"
import Header from "../services/components/Header"
import Colors from "../../constants/color"
import Fonts from "../../constants/font"
import { FloatingWhatsApp } from "react-floating-whatsapp"
import { useProfile } from "../../features/myprofile/useProfile"

import { useTranslation } from "react-i18next"
import { useFocusEffect, useIsFocused } from "@react-navigation/native"
import { useCallback, useEffect } from "react"



const Home = () =>{


   
  const { t } = useTranslation();
    const arr = [
    {title:t('profile'),navigationScreen:"myProfile"},
    {title:t('digitalDocument'),navigationScreen:"digitalDocument"},
    {title:t('warrantyCard'),navigationScreen:"waranty"},
    {title:t('productInfo'),navigationScreen:"productInfo"},
    {title:t('driverAgreement'),navigationScreen:"driverAgreement"},
    {title:t('referAndEarn'),navigationScreen:"referAndEarn"},
    {title:t('logout'),navigationScreen:"myProfile"}
]


    const {profile,refetch} = useProfile()

  useFocusEffect(
    useCallback(() => {
      refetch();  // jab bhi screen focus hoga, profile reload hoga
    }, [refetch])
  );

return <View style={styles.container}>
        <View>
        <Header title={t('profile')}/>
        <View style={styles.innerContainer}>
            {
                profile?.driver?.selfie !==undefined
                ?
             <Image
            source={{uri:profile?.driver?.selfie}}
            style={{width:80,height:80,borderRadius:50,borderWidth:1}}
            /> 
                : 
            <Image
            source={require('../../assets/png/driverPic.png')}
            />
            }
       
            <View>
                <Text style={styles.heading}>{profile?.name}</Text>
                <View>
                    <Text style={styles.subHeading}>Driver ID-      {profile?.driver?.driverId}</Text>
                    <Text style={styles.subHeading}>Battery ID-    {profile?.driver?.batteryId}</Text>
                </View>
            </View>
            <View/>
            <View/>
            <View/>
            <View/>
     
        </View>
        <View style={styles.outerContainer}>
            {arr.map((item,idx) => <Card key={idx} {...item}/>)}
        </View>
        </View>
{/* <FloatingWhatsApp
        phoneNumber="919876543210"
        accountName="Support"
        avatar="https://yourdomain.com/avatar.jpg"
        chatMessage="Hi there! How can I help you?"
        allowEsc
        allowClickAway
        notification
        notificationSound
      /> */}
</View>
}

export default Home

const styles = StyleSheet.create({
    container:{
      
        flex:1,
        backgroundColor:Colors.appBackground
    },
  
    innerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
       marginHorizontal:20,
       marginVertical:30
    },
    heading:{
        fontWeight:"500",
        fontSize:20,
        color:Colors.txtblack,
        fontFamily:Fonts.poppinsBold
    },
    subHeading:{
        fontWeight:"400",
        fontSize:13,
        fontFamily:Fonts.poppinsLight
    },
    outerContainer:{
        backgroundColor:Colors.white,
        // height:300,
        borderRadius:10,
        marginHorizontal:20,
        marginVertical:20,
        padding:20,
    }
})