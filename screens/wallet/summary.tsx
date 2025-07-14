import { View,StyleSheet,Text, Pressable } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Colors from "../../constants/color"
import Fonts from "../../constants/font"
import Header from "../services/components/Header"
const Summary = () =>{
return <View style={{flex:1,backgroundColor:Colors.appBackground}}>
    <Header title="Pay Now"/>
    <View style={styles.container}>
        <View style={[styles.container,{backgroundColor:Colors.appBackground,width:"100%"}]}>
        <View style={styles.circle}>
            <AntDesign name="check" size={30}/>
          
        </View>
        <Text style={styles.heading}>EMI Amount</Text>
        <Text style={[styles.heading,{fontWeight:"700",marginVertical:10}]}>₹8000</Text>
        <Text style={[styles.heading,{fontWeight:"700",marginVertical:10,fontSize:22,color:Colors.secondary}]}>Payment  Successfully </Text>
        </View>
        <View style={styles.innerContainer}>
            <Text style={[styles.heading,{color:"#000",fontWeight:"600"}]}>UPI transaction ID</Text>
            <Text style={[styles.heading,{fontWeight:"400",fontSize:14}]}>585858585858</Text>
            <Text  style={[styles.heading,{fontWeight:"400",fontSize:16,marginVertical:10}]}>To: DigiVoltt</Text>
            <Text  style={[styles.heading,{fontWeight:"400",fontSize:16}]}>UPI ID: 5858585858</Text>
        
        <View style={[styles.row]}>
            <Pressable style={styles.btnContainer}>         
      <FontAwesome name="question-circle-o" size={15} color={'black'} />
            <Text style={styles.txtStyle}>Having Issues?</Text>
            </Pressable>
            <Pressable style={styles.btnContainer}>
                <Entypo name="share" size={15}/>
                <Text style={styles.txtStyle}>Share</Text>
                </Pressable>
        </View>
        </View>

</View>
</View>

}

export default  Summary
const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.white,
        // height:100,
        borderRadius:20,
        marginHorizontal:10,
        marginVertical:10,
        padding:5,
        justifyContent:"center",
        alignItems:"center"

    },
    innerContainer:{
        marginVertical:20,
        // flex:1,
        width:"100%",
        padding:10
    },
    circle:{
        backgroundColor:Colors.primary,
        padding:10,
        borderRadius:100
    },
    rowContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
    },
    heading:{
        fontWeight:"400",
        fontSize:18,
        fontFamily:Fonts.poppinsRegular
    },
    row:{
     flexDirection:"row",
     alignItems:'center',
     justifyContent:"space-between",
     marginVertical:10,
     width:"70%"
    },
    btnContainer:{
        flexDirection:"row",
        backgroundColor:"#89898987",
        padding:10,
        borderRadius:10,  
        justifyContent:"center",
        alignItems:"center"
    },
    txtStyle:{
        fontFamily:Fonts.poppinsRegular
    }
})