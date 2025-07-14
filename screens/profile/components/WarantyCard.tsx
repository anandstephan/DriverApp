import { StyleSheet, View,Text,Image } from "react-native"
import Tag from "../../../assets/jsx/Tag"
import Colors from "../../../constants/color"

const WarantyCard = () =>{
return <View style={styles.container}>
        <View style={styles.rowContainer}>
        <View>
        <Text style={styles.cardNumber}>1234 5678 9012</Text>
        <Text style={styles.cardNumber}>Serial Number</Text>
        <Text style={styles.cardNumber}>Valid Till:  07/2028 </Text>
        <View style={styles.line}/>
        </View>
        <Image
        source={require('../../../assets/png/Clock.png')}
        />

    </View>
 
    <View style={styles.tag}>
    <Tag/>
    </View>
    <View style={{marginTop:"10%"}}>
        <Text style={styles.txtStyle}>Keep your battery covered – Tap to extend warranty</Text>
    </View>
</View>
}

export default WarantyCard

const styles = StyleSheet.create({
container:{
       backgroundColor:Colors.white,
        // height:300,
        borderRadius:10,
        marginHorizontal:20,
        marginVertical:20,
        // padding:20,
},
rowContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",


},
dateLeft:{
   fontWeight:"400",
   fontSize:15,
   marginLeft:5
},
midContainer:{
    justifyContent:"center",
    alignItems:'center'
},
cardNumber:{
    color:"#000",
    fontSize:20,
    fontWeight:"500",
    margin:10
},
subHeading:{
  fontSize:12  
},
date:{
    fontWeight:"400",
    fontSize:16,
    color:"#000"
},
datePlaceholder:{
        fontWeight:"400",
        fontSize:13
},
tag:{
    position:"absolute",
    top:'85%',
    left:-10
},
txtStyle:{
    fontWeight:"400",
    color:"#000000",
    marginHorizontal:20,
    fontSize:14,
    alignSelf:"center",
    marginBottom:20
},
  line:{
        width:'100%',
        backgroundColor:Colors.primary,
        height:7,
        borderRadius:10
    },
})