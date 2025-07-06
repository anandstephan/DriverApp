import { StyleSheet, View,Text } from "react-native"
import Battery from "../../../assets/jsx/Battery"
import Time from "../../../assets/jsx/Time"
import Tag from "../../../assets/jsx/Tag"

const WarantyCard = () =>{
return <View style={styles.container}>
    <View style={styles.rowContainer}>
    <Battery/>
    <View style={styles.rowContainer}>
        <Time/>
        <Text style={styles.dateLeft}>870 Days Left</Text>
    </View>
    </View>
    <View style={styles.midContainer}>
        <Text style={styles.cardNumber}>1234 5678 9012</Text>
        <View style={styles.rowMidContainer}>
            <View>
                <Text style={styles.date}>07/24</Text>
                <Text style={styles.datePlaceholder}>mm/yy</Text>
            </View>
            <View>
                <Text style={styles.date}>07/29</Text>
                <Text style={styles.datePlaceholder}>mm/yy</Text>
            </View>
        </View>
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
       backgroundColor:"#D9D9D9",
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
rowMidContainer:{
    flexDirection:"row",
    // borderWidth:1,
    // flex:1,
    width:140,
    justifyContent:"space-between",
    alignItems:'center'
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
}
})