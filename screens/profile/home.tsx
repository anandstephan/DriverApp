import { Image, StyleSheet, Text, View } from "react-native"
import Card from "./components/Card"


const arr = [
    {title:"My Profile",navigationScreen:"myProfile"},
    {title:"Digital Documents"},
    {title:"Warranty card",navigationScreen:"waranty"},
    {title:"Product Information"},
    {title:"Driver Agreement"},
    {title:"Refer and Earn",navigationScreen:"referAndEarn"},
    {title:"Logout"}
]

const Home = () =>{
return <View style={styles.container}>
        <Text style={styles.heading}>My Profile</Text>
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
        padding:10
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
        color:"#000000"
    },
    subHeading:{
        fontWeight:"400",
        fontSize:13
    },
    outerContainer:{
        backgroundColor:"#D9D9D9",
        // height:300,
        borderRadius:10,
        marginHorizontal:20,
        marginVertical:20,
        padding:20,
    }
})