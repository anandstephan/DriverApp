import { Image, StyleSheet, View } from "react-native"
import Colors from "../../constants/color"
import { Dimensions } from "react-native"
import Header from "../services/components/Header"

const DriverAgreement = () =>{
return <View style={styles.container}>
        <Header title="Driver Agreement"/>
        <Image
        source={{uri:"https://plus.unsplash.com/premium_photo-1661342487942-5088c399f03d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdW1lbnR8ZW58MHx8MHx8fDA%3D"}}
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').height/1.8}
        />
</View>
}

export default DriverAgreement

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackground
    }
})