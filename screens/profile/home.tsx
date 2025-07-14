import { Image, StyleSheet, Text, View } from "react-native"
import Card from "./components/Card"
import Header from "../services/components/Header"
import Colors from "../../constants/color"
import Fonts from "../../constants/font"


const arr = [
    {title:"My Profile",navigationScreen:"myProfile"},
    {title:"Digital Documents",navigationScreen:"myProfile"},
    {title:"Warranty card",navigationScreen:"waranty"},
    {title:"Product Information",navigationScreen:"productInfo"},
    {title:"Driver Agreement",navigationScreen:"myProfile"},
    {title:"Refer and Earn",navigationScreen:"referAndEarn"},
    {title:"Logout",navigationScreen:"myProfile"}
]

const Home = () =>{
return <View style={styles.container}>
        <Header title="My Profile"/>
        <View style={styles.innerContainer}>
            <Image
            source={require('../../assets/png/driverPic.png')}
            />
            <View>
                <Text style={styles.heading}>Pankaj Kumar</Text>
                <View>
                    <Text style={styles.subHeading}>Driver ID-      LI2011</Text>
                    <Text style={styles.subHeading}>Battery ID-    XYZ15358</Text>
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
}

export default Home

const styles = StyleSheet.create({
    container:{
        margin:10,
        padding:10,
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