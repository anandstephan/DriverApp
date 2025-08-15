import { View,Text, StyleSheet } from "react-native"
import Road from "../../../assets/jsx/Road"
const InfoCard = ({title,item}) =>{
 
return <View style={styles.container}>
        <View>
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.subHeading}>{item}</Text>
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
        padding:10,
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