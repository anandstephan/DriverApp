import { Image, StyleSheet, View,Text, Pressable, ScrollView } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AntDesign1 from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native"
import Colors from "../../constants/color"
import Fonts from "../../constants/font"
import Header from "../services/components/Header"



const Home = () =>{
    const navigation = useNavigation()
return <View style={{flex:1,backgroundColor:Colors.appBackground}}>
    <Header title="My Wallet"/>
<ScrollView style={{backgroundColor:Colors.appBackground,marginVertical:30}}>
        <View style={styles.container}>
        <View style={styles.rowContainer}>
            <Image
            source={require('../../assets/png/QR.png')}
            width={100}
            height={100}
            />
            <View style={styles.verticalContainer}>
                <Text style={styles.heading}>Scan & Pay Me Here</Text>
                <View style={styles.innerContainer}>
                <View style={styles.innerContainer}>
                <Entypo name="share" size={15} />
                <Text style={styles.txtStyle}>Share QR</Text>
                </View>
                <View style={styles.innerContainer}>
                <AntDesign name="download" size={15} />
                <Text style={styles.txtStyle}>Save QR</Text>
                </View> 
                </View>
                <View style={[styles.innerContainer,{justifyContent:"flex-start"}]}>
                <Entypo name="calculator" size={15}/>
                <Text  style={styles.txtStyle}>
                Balance & History
                </Text>
                </View>
            </View>
        </View>
</View> 
        <View style={[styles.container,{backgroundColor:"transparent",borderWidth:0}]}>
            <Text style={styles.heading}>EMI Trakcer</Text>

        </View>
        <View style={styles.container}>
            <View style={[styles.container,{borderWidth:0}]}>
            <Text style={styles.heading1}>Total Pending</Text>
            <View style={styles.rowContainer}>
            <Text style={styles.emiAmt}>₹53,444</Text>
            <Text style={styles.emiAmt}><Text style={[styles.emiAmt,{color:"#000"}]}>3</Text> / 12 Months</Text>
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.line}/>
                <View style={styles.line}/>
                <View style={styles.line}/>
                <View style={[styles.line,{backgroundColor:"red"}]}/>
                <View style={[styles.line,{backgroundColor:"#FFF"}]}/>
                <View style={[styles.line,{backgroundColor:"#FFF"}]}/>
                <View style={[styles.line,{backgroundColor:"#FFF"}]}/>
            </View>
            <Text style={styles.txtStyle2}>Request Foreclosure?</Text>
            </View>

        </View>
        <View style={[styles.rowContainer,{marginHorizontal:"5%"}]}>
            <Pressable style={styles.btn} onPress={()=>navigation.navigate('payment')}>
                <Text style={styles.btnTxt}>Schedule</Text>
            </Pressable>
            <Pressable style={[styles.btn,{borderColor:"#EAEAEA",backgroundColor:Colors.primary}]}>
                <Text style={[styles.btnTxt]}>History</Text>
            </Pressable>
        </View>
        <View style={[styles.container,{marginHorizontal:10}]}>
        <View style={styles.rowContainer}>
        <Text style={styles.tableHeading}>Due Date</Text>
        <Text style={styles.tableHeading}>Amount</Text>
        <Text style={styles.tableHeading}>Status</Text>
        <Text style={styles.tableHeading}>Action</Text>
        </View>
        <View style={[styles.rowContainer,{backgroundColor:"#FFFFFF",margin:5}]}>
        <Text style={[styles.tableContent,{fontWeight:"500"}]}>11 - 04 - 25</Text>
        <Text style={styles.tableContent}>₹ 3500</Text>
        <Text style={styles.tableContent}>Due</Text>
        <Text style={styles.tableContent}>Pay</Text>
        </View>
        <View style={[styles.rowContainer,{backgroundColor:"#FFFFFF",margin:5}]}>
        <Text style={[styles.tableContent,{fontWeight:"500"}]}>11 - 04 - 25</Text>
        <Text style={styles.tableContent}>₹ 3500</Text>
        <Text style={styles.tableContent}>Due</Text>
        <Text style={styles.tableContent}>Pay</Text>
        </View>
        <View style={[styles.rowContainer,{backgroundColor:"#FFFFFF",margin:5}]}>
        <Text style={[styles.tableContent,{fontWeight:"500"}]}>11 - 04 - 25</Text>
        <Text style={styles.tableContent}>₹ 3500</Text>
        <Text style={styles.tableContent}>Due</Text>
        <Text style={styles.tableContent}>Pay</Text>
        </View>
        <View style={[styles.rowContainer,{backgroundColor:"#FFFFFF",margin:5}]}>
        <Text style={[styles.tableContent,{fontWeight:"500"}]}>11 - 04 - 25</Text>
        <Text style={styles.tableContent}>₹ 3500</Text>
        <Text style={styles.tableContent}>Due</Text>
        <Text style={styles.tableContent}>Pay</Text>
        </View>
        
        </View>
</ScrollView>
</View>
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.white,
        // height:100,
        borderRadius:20,
        marginHorizontal:10,
        marginVertical:10,
        padding:5,
        borderWidth:1,
        borderColor:Colors.lightGray
    },
    rowContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
    },
    heading:{
        fontWeight:"700",
        fontSize:20,
        fontFamily:Fonts.poppinsRegular
    },
    innerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    txtStyle:{
        fontWeight:"400",
        fontSize:14,
        marginLeft:10,
        fontFamily:Fonts.poppinsRegular
    },
    verticalContainer:{
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        margin:10,
        height:120
    },
    heading1:{
        color:"#A8A8A8",
        fontWeight:"700",
        fontSize:15,
        fontFamily:Fonts.poppinsRegular
    },
    emiAmt:{
        fontSize:16,
        fontWeight:"700",
        color:"#777777",
        fontFamily:Fonts.poppinsRegular
    },
    line:{
        width:40,
        backgroundColor:Colors.primary,
        height:7,
        borderRadius:10
    },
    txtStyle2:{
        alignSelf:"center",
        borderBottomWidth:1,
        fontWeight:"600"
        ,fontSize:15,
        color:"#7C7C7C",
        borderColor:"#7C7C7C"
    },
    btn:{
        padding:10,
        margin:10,
        // borderWidth:1,
        borderRadius:20,
        width:'40%',
        backgroundColor:Colors.secondary,
       
    },
    btnTxt:{
        alignSelf:"center",
        fontWeight:"700",
        fontSize:16,
        color:Colors.white
    },
    tableHeading:{
        color:"#ACACAC",
        fontWeight:"500",
        fontSize:14,
        fontFamily:Fonts.poppinsRegular
    },
    tableContent:{
        // color:"#ACACAC",
        fontWeight:"700",
        fontSize:14,
            fontFamily:Fonts.poppinsRegular
    }
})