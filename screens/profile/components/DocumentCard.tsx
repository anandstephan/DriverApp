import { View,StyleSheet,Text } from "react-native"
import DigitalDocument from "../../../assets/jsx/DigitalDocument"
import Fonts from "../../../constants/font"
import Colors from "../../../constants/color"

const DocumentCard = () =>{
return <View style={styles.container}>
    <DigitalDocument/>
    <Text style={styles.txtStyle}>Personal Driver’s License</Text>
</View>
}

export default DocumentCard

const styles = StyleSheet.create({
container:{
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    marginHorizontal:50,
    marginVertical:20,
    backgroundColor:Colors.white,
    padding:10,
    borderRadius:10
},
txtStyle:{
    fontSize:14,
    fontFamily:Fonts.poppinsRegular,
    marginHorizontal:20
}
})