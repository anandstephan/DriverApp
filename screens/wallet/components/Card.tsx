import { StyleSheet,View,Text } from "react-native"
import Fonts from "../../../constants/font"

const Card = ({item}:any) =>{
return <View style={[styles.rowContainer,{backgroundColor:"#FFFFFF",margin:5}]} key={item.emiNumber}>
        <Text style={[styles.tableContent,{fontWeight:"500"}]}>{new Date(item.dueDate).toLocaleDateString()}</Text>
        <Text style={styles.tableContent}>₹ {item.amount}</Text>
        <Text style={styles.tableContent}>{item.status}</Text>
        <Text style={styles.tableContent}>Pay</Text>
        </View>
}

export default Card

const styles = StyleSheet.create({
        rowContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        flex:1
    },
        tableContent:{
        // color:"#ACACAC",
        fontWeight:"700",
        fontSize:14,
            fontFamily:Fonts.poppinsRegular
    }
})