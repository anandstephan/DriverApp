import { View } from "react-native"
import WarantyCard from "./components/WarantyCard"
import { StyleSheet } from "react-native"

const Waranty = () =>{
return <View style={styles.container}>
        <WarantyCard/>
          <WarantyCard/>
</View>
}

export default Waranty
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:'center'
    }
})