import { StyleSheet, View,Text,Image } from "react-native"
import ReferAndEarn from "../../assets/jsx/ReferAndEarn"
import Fonts from "../../constants/font"
import Colors from "../../constants/color"
import Header from "../services/components/Header"
import { useTranslation } from "react-i18next"

const ReferEarn = () =>{

    const {t} = useTranslation()

return <View style={{backgroundColor:Colors.appBackground,flex:1}}>
    <Header title={t('referAndEarn')}/>
<View style={styles.container}>
    <ReferAndEarn/>
    <Text style={styles.txtStyle}>**share your code and get exclusive peaks**</Text>
    <View style={styles.codeContainer}>
        <Text style={styles.label}>C85D1</Text>
        <View/>
        <View/>
        <View/>
        <View style={styles.line}/>
        <Text style={styles.label}>Copy</Text>
    </View>
    <View style={[styles.codeContainer,{justifyContent:'center',borderWidth:0}]}>
        <Text style={styles.label}>Refer & Earn</Text>
    </View>
      <View style={styles.secondaryContainer}>
        <View style={styles.outerContainer}>
        <Text style={styles.tableHeadingStyle}>History</Text>
        </View>
        <View style={styles.tableContentContainer}>
            <View style={styles.tableHeadingContainer}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.label}>Location</Text>
            </View>
            <View style={styles.tableHeadingContainer}>
                <View style={{flexDirection:"row",alignItems:'center',justifyContent:"space-between",marginLeft:-20}}>
                <Image
                source={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"}}
                width={50}
                height={50}
                style={{
                    borderRadius:100
                }}
                />
                <Text>Sakshi</Text>

                </View>
                <Text>Delhi</Text>
            </View>
        </View>
        </View>
</View>
</View>
}

export default ReferEarn

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:"center",
        marginVertical:'10%',

    },
    txtStyle:{
        fontWeight:"400",
        fontSize:14,
        color:"#000000",
        marginTop:-25,
        fontFamily:Fonts.poppinsRegular
    },
    codeContainer:{
        width:150,
        borderRadius:5,
        backgroundColor:"#ECECEC",
        padding:10,
        margin:10,
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth:1,
        borderStyle:"dashed",
        borderColor:"black"
        // alignItems:'center'
    },
    secondaryContainer:{
          backgroundColor:"#D9D9D9",
        // height:300,
        width:"90%",
        borderRadius:10,
        marginHorizontal:20,
        marginVertical:20,

        // padding:20,
    },
    outerContainer:{
 
        justifyContent:"center",
        alignItems:'center',
        padding:10,
        backgroundColor:Colors.secondary,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    line:{
        borderWidth:0.5
    },
    tableHeadingStyle:{
        fontWeight:"700",
        color:Colors.white,
        fontSize:16,
        fontFamily:Fonts.poppinsRegular
    },
    tableContentContainer:{
        height:100
    },
    tableHeadingContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:50,
        alignItems:"center"
    },
    label:{
        color:Colors.txt,
        fontWeight:"400",
        fontSize:15,
        fontFamily:Fonts.poppinsRegular
    }
})