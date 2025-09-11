import { View,Text, StyleSheet, ScrollView } from "react-native"
import WarantyCard from "./components/WarantyCard"
import Colors from "../../constants/color"
import Header from "../services/components/Header"
import { useWarantyCard } from "../../features/waranty/useWarantyCard"
import { ActivityIndicator } from "react-native"
import Fonts from "../../constants/font"

const Waranty = () =>{

  const { data, loading, error } = useWarantyCard();

  console.log("====",data)

  if (loading) return <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
    <ActivityIndicator size={'large'}/>
  </View>
  if (error) return <Text>Error: {error}</Text>;

return <View style={styles.outerContainer}>
            <Header title="Warranty Card"/>
            <ScrollView>
        <View style={styles.container}>
        <Text style={styles.txtStyle}>Battery</Text>
        <WarantyCard item={data?.data.warrantyCard.battery} type="battery"/>
        <Text style={styles.txtStyle}>Charger</Text>
        <WarantyCard item={data?.data.warrantyCard.charger} type="charger"/>
       </View>
</ScrollView>
</View>

}

export default Waranty
const styles = StyleSheet.create({
    outerContainer:{
        flex:1,
        backgroundColor:Colors.appBackground
    },
    container:{
        justifyContent:"center",
        alignItems:'center',
    },
    txtStyle:{
    fontWeight:"500",
    fontSize:15,
    fontFamily:Fonts.poppinsBold,
    // borderWidth:1,
    marginRight:"60%",
    marginTop:50
    }
})