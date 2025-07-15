import { StyleSheet, View,Text } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fonts from "../../../constants/font"
import Colors from "../../../constants/color"

type Props={
    title:String;
}
const ProductCard = ({title}:Props) =>{
return <View style={styles.container}>
        <View style={styles.rowContainer}>
            <View style={styles.circle}>
                {title==="product" ?  <AntDesign name="book" size={20}/>: <Ionicons name="document" size={20}/>}
               
            </View>
            <Text style={styles.label}>
                  {title==="product" ? "Product":"Document"} Info
            </Text>

        </View>
        <View style={styles.box}>
            <Text style={styles.label}>Product 1</Text>
            <Text style={[styles.label,{color:"#7D7D7D"}]}>Detailed battery specifications are provided.</Text>
        </View>
             <View style={styles.box}>
            <Text style={styles.label}>Product 1</Text>
            <Text style={[styles.label,{color:"#7D7D7D"}]}>Detailed battery specifications are provided.</Text>
        </View>
</View>
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.white,
        // height:300,
        borderRadius:10,
        marginHorizontal:20,
        marginVertical:20,
        padding:20,
    },
    rowContainer:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",

    },
    circle:{
            backgroundColor:"#FFF",
        padding:10,
        borderRadius:50,
        borderTopLeftRadius:10,
    },
    label:{
      fontWeight:"500",
        fontSize:14,
        color:Colors.txtblack,
        marginLeft:20,
        fontFamily:Fonts.poppinsRegular
    },
    box:{
        borderRadius:10,
        marginVertical:10,
        padding:10,
        margin:5, 
        height:80,
        backgroundColor:Colors.white,
        justifyContent:"center",
        alignItems:'center',
        borderWidth:0.8,
        borderColor:Colors.lightGray
    }
})