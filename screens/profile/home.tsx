import { Image, StyleSheet, Text, View } from "react-native"
import Card from "./components/Card"
import Header from "../services/components/Header"
import Colors from "../../constants/color"
import Fonts from "../../constants/font"
import { FloatingWhatsApp } from "react-floating-whatsapp"
import { useProfile } from "../../features/myprofile/useProfile"


const arr = [
    {title:"My Profile",navigationScreen:"myProfile"},
    {title:"Digital Documents",navigationScreen:"digitalDocument"},
    {title:"Warranty card",navigationScreen:"waranty"},
    {title:"Product Information",navigationScreen:"productInfo"},
    {title:"Driver Agreement",navigationScreen:"driverAgreement"},
    {title:"Refer and Earn",navigationScreen:"referAndEarn"},
    {title:"Logout",navigationScreen:"myProfile"}
]

const Home = () =>{

    const {profile} = useProfile()
return <View style={styles.container}>
        <View>
        <Header title="My Profile"/>
        <View style={styles.innerContainer}>
            <Image
            source={require('../../assets/png/driverPic.png')}
            />
            <View>
                <Text style={styles.heading}>{profile?.name}</Text>
                <View>
                    <Text style={styles.subHeading}>Driver ID-      {profile?.driverId}</Text>
                    <Text style={styles.subHeading}>Battery ID-    {profile?.batteryId}</Text>
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