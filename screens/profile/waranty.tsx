import { View,Text } from "react-native"
import WarantyCard from "./components/WarantyCard"
import { StyleSheet } from "react-native"
import Colors from "../../constants/color"
import Header from "../services/components/Header"
import { useWarantyCard } from "../../features/waranty/useWarantyCard"
import { ActivityIndicator } from "react-native"

const Waranty = () =>{

  const { data, loading, error } = useWarantyCard();



  if (loading) return <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
    <ActivityIndicator size={'large'}/>
  </View>
  if (error) return <Text>Error: {error}</Text>;

return <View style={styles.outerContainer}>
            <Header title="Warranty Card"/>
<View style={styles.container}>

        <WarantyCard item={data?.data.warrantyCard}/>
 
</View>
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
    }
})