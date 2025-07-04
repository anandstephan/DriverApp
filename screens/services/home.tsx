import { View,Text, StyleSheet } from "react-native"
import Card from "./components/Card"

const Home = () =>{
return <View style={styles.container}>
        <Text style={styles.txtStyle}>Services Page</Text>
        <Card heading="Raise Tickets" subHeading="Raise New Tickets"/>
        <Card heading="View Tickets" subHeading="Check Status"/>
        <Card heading="Reports" subHeading="Detailed Reports"/>
</View>
}

export default Home

const styles = StyleSheet.create({
    container:{
     margin:10,
     padding:10,
     backgroundColor:"#FFF",
     flex:1
    },
    txtStyle:{
       fontWeight:"600",
       fontSize:18 
    }
})