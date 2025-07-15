import { View,Text, StyleSheet } from "react-native"
import Card from "./components/Card"
import Colors from "../../constants/color"
import Fonts from "../../constants/font"

const data = [
    {heading:"Raise Tickets",subHeading:"Raise New Tickets",navigationScreen:"createTicket"},
    {heading:"View Tickets",subHeading:"Check Status",navigationScreen:"viewTicket"},
    {heading:"Reports",subHeading:"Detailed Reports",navigationScreen:""}
]



const Home = () =>{
return <View style={styles.outerContainer}>
 <View style={styles.container}>
        <Text style={styles.txtStyle}>Services Page</Text>
            {data.map(item => <Card key={item.heading} heading={item.heading} subHeading={item.subHeading}  navigationScreen={item.navigationScreen}/>)}
</View>
</View>
}

export default Home

const styles = StyleSheet.create({
    outerContainer:{
     backgroundColor:Colors.appBackground,
     flex:1
    },
    container:{
    margin:10,
     padding:10,
    },
    txtStyle:{
       fontSize:18 ,
       fontFamily:Fonts.poppinsBold
    }
})