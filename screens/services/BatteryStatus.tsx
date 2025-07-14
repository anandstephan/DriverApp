import { View,StyleSheet,Text, Image } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Header from "./components/Header";
import Colors from "../../constants/color";
import Fonts from "../../constants/font";
const BatteryStatus = () =>{
return <View style={{backgroundColor:Colors.appBackground,flex:1}}>
<Header title="View Ticket"/>
<View style={styles.container}>   
        <View style={styles.rowContainer}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <View style={styles.circle}>
            <Image source={require('../../assets/png/batteryIcon.png')}/>
            </View>
                <Text style={styles.heading}>Battery Status</Text>
                </View>
            <View>
                <Entypo name="dots-three-vertical" size={20}/>
            </View>
        </View>
        <View style={[styles.container,{borderWidth:1,borderColor:Colors.lightGray}]}>
            <View style={[styles.rowContainer]}>
                <View style={[styles.rowContainer,{padding:0}]}>
                <AntDesign name="calendar" size={20}/>
                <Text style={styles.date}>10/02/2025</Text>
                </View>

                <View style={{backgroundColor:"#EAEAEA",padding:5,borderRadius:5}}>
                <Text style={[styles.date,{fontSize:12,color:"#ADADAD"}]}>10AL9831</Text>
            </View>
            
            </View>
            <View style={[styles.rowContainer,{justifyContent:"flex-start",marginTop:-20}]}>
                <Entypo name="clock" size={20}/>
                <Text style={styles.date}>9:00 - 12:00AM</Text>
                </View>
            <View style={[styles.rowContainer,{padding:5,marginHorizontal:0,marginVertical:10,paddingVertical:10}]}>
            <Text style={[styles.date,{color:"#7D7D7D"}]}>Service Engineer: <Text style={{color:"#000",fontWeight:"500"}}>9909090909</Text></Text>
            <Text style={{borderBottomWidth:1,color:"#7D7D7D",fontFamily:Fonts.poppinsRegular}}>Call Now</Text>
            </View>
        </View>

        <View style={[styles.container,{backgroundColor:"#FFF",marginVertical:10,borderWidth:1,borderColor:Colors.lightGray}]}>
            <Text style={[styles.heading,{fontWeight:"500"}]}>Description</Text>
            <Text style={styles.para}>
            Battery stopped working yesterday, please fix it fast. Charger is working
            </Text>
            <View style={[styles.container,{flexDirection:"row",justifyContent:"space-between",backgroundColor:"#FFF",marginVertical:10}]}>
            <View style={styles.box}/>
            <View style={styles.box}/>
            <View style={styles.box}>
            <Entypo name="controller-play" size={50}/>
            </View>
            <View/>
            <View/>
            <View/>
            </View>
        </View>
        <View style={styles.container}>
                <Text style={styles.rating}>Rate Our Service</Text>
            {/* <View style={{flex:1}}> */}
            <Rating
            type="custom"
            ratingColor="#FFFFFF"
            ratingCount={5}
            ratingBackgroundColor="#FFF"
            style={{
                marginLeft:-90,
                marginVertical:10,

            }}
            />
            {/* </View>  */}

        </View>

</View>
</View>
}

export default BatteryStatus

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.white,
        // height:100,
        borderRadius:20,
        marginHorizontal:20,
        marginVertical:10,
        padding:5,
        marginTop:20

    },
    rowContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:20,
    },
    circle:{
        backgroundColor:Colors.lightGray,
        padding:10,
        borderRadius:50,
        borderTopLeftRadius:10,
    },
    heading:{
        marginHorizontal:20,
        color:"#5E5E5E",
        fontWeight:"700",
        fontSize:16,
        marginVertical:5,
        fontFamily:Fonts.poppinsRegular
    },
    date:{
        fontWeight:"500",
        fontSize:14,
        marginHorizontal:10,
        fontFamily:Fonts.poppinsRegular   
    },
    para:{
        marginHorizontal:10,
        marginLeft:20,
        color:"#7D7D7D",
        fontWeight:"400",
        fontSize:12,
        marginVertical:10,
        fontFamily:Fonts.poppinsRegular
    },
    box:{
        width:50,
        height:50,
        backgroundColor:"#D9D9D9",
        borderRadius:5
    },
    rating:{
        fontWeight:"400",
        color:"#676767",
        fontSize:16,
        fontFamily:Fonts.poppinsRegular
    }
})