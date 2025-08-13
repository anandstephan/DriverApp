import { View,Text, StyleSheet } from "react-native"
import Road from "../../../assets/jsx/Road"
const InfoCard = () =>{
return <View style={styles.container}>
        <View>
            <Text style={styles.heading}>Distance</Text>
            <Text style={styles.subHeading}>13.03kms</Text>
        </View>
        <View>
            <Road/>
        </View>
    </View>
}

export default InfoCard

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#57C8DC",
        padding:15,
        margin:10,
        width:200,
        borderRadius:5
    },
    heading:{
        color:"#FFFFFF",
        fontSize:16
    },
    subHeading:{
      fontSize:24,
      color:"#FFFFFF",
      fontWeight:"bold"
    }
})