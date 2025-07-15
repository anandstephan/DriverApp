import { View } from "react-native"
import WarantyCard from "./components/WarantyCard"
import { StyleSheet } from "react-native"
import Colors from "../../constants/color"
import Header from "../services/components/Header"

const Waranty = () =>{
return <View style={styles.outerContainer}>
            <Header title="Warranty Card"/>
<View style={styles.container}>
        <WarantyCard/>
          <WarantyCard/>
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