import { Image, StyleSheet, View,Text, Pressable, ScrollView } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AntDesign1 from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native"
import Colors from "../../constants/color"
import Fonts from "../../constants/font"
import Header from "../services/components/Header"
import { useProfile } from "../../features/myprofile/useProfile"
import { useState } from "react"
import Card from "./components/Card"
import { useTranslation } from "react-i18next"



const Home = () =>{
    const navigation = useNavigation()
      const { profile, loading, error, refetch } = useProfile();
        const [active,setActive] = useState(false)
          const { t } = useTranslation();
    
      console.log("==>",profile?.driver.emiPayment.emiAmount)
      let paymentsCount = profile?.driver.emiPayment.payments.filter(item => item.status!=='paid').length
      let paidCount = profile?.driver.emiPayment.payments.filter(item => item.status==='paid').length
      console.log(profile?.driver?.emiPayment)
    //   let numberOfUnpaid = 


return <View style={{flex:1,backgroundColor:Colors.appBackground}}>
    <Header title="My Wallet"/>
<ScrollView style={{backgroundColor:Colors.appBackground,marginVertical:30}}>
        <View style={styles.container}>
        <View style={styles.rowContainer}>
            <Image
            source={require('../../assets/png/blur.png')}
            width={100}
            height={100}
            />
            <View style={styles.verticalContainer}>
                <Text style={styles.heading}>{t('scanPayHere')}</Text>
                <View style={styles.innerContainer}>
                <View style={styles.innerContainer}>
                <Entypo name="share" size={15} />
                <Text style={styles.txtStyle}>{t('shareQR')}</Text>
                </View>
                <View style={styles.innerContainer}>
                <AntDesign name="download" size={15} />
                <Text style={styles.txtStyle}>{t('saveQR')}</Text>
                </View> 
                </View>
                <View style={[styles.innerContainer,{justifyContent:"flex-start"}]}>
                <Entypo name="calculator" size={15}/>
                <Text  style={styles.txtStyle}>
                {t('balanceHistory')}
                </Text>
                </View>
            </View>
        </View>
</View> 
        <View style={[styles.container,{backgroundColor:"transparent",borderWidth:0}]}>
            <Text style={styles.heading}>{t('emi')}</Text>

        </View>
        <View style={styles.container}>
            <View style={[styles.container,{borderWidth:0}]}>
            <Text style={styles.heading1}>{t('total')}</Text>
            <View style={styles.rowContainer}>
            <Text style={styles.emiAmt}>₹{profile?.driver.emiPayment.emiAmount*paymentsCount}</Text>
            <Text style={styles.emiAmt}><Text style={[styles.emiAmt,{color:"#000"}]}>{paidCount}</Text> / {profile?.driver?.emiPayment?.tenure} {t('months')}</Text>
            </View>
            <View style={styles.rowContainer}>

                {
            profile?.driver.emiPayment.payments.filter(item => item.status==='paid').map((item,idx) =><View key={idx} style={styles.line}/> )
                }
                {
            profile?.driver.emiPayment.payments.filter(item => item.status==='upcoming').map((item,idx) =><View key={idx} style={[styles.line,{borderWidth:1,backgroundColor:"#FFF",borderColor:"gray"}]}/> )
                }
                {
            profile?.driver.emiPayment.payments.filter(item => item.status==='due').map((item,idx) =><View key={idx} style={[styles.line,{backgroundColor:"red"}]}/> )
                }

            </View>
            <Text style={styles.txtStyle2}>{t('requestForeclosure')}?</Text>
            </View>

        </View>
        <View style={[styles.rowContainer,{marginHorizontal:"5%"}]}>
            <Pressable style={[styles.btn,active && {backgroundColor:Colors.white}]} onPress={()=>setActive(false)}>
                <Text style={[styles.btnTxt,!active && {color:Colors.white}] }>{t('schedule')}</Text>
            </Pressable>
            <Pressable style={[styles.btn,!active && {backgroundColor:Colors.white}]} onPress={()=>setActive(true)}>
                <Text style={[styles.btnTxt,active && {color:Colors.white}]}>{t('history')}</Text>
            </Pressable>
        </View>
        <View style={[styles.container,{marginHorizontal:10}]}>
        <View style={styles.rowContainer}>
        <Text style={styles.tableHeading}>{t('dueDate')}</Text>
        <Text style={styles.tableHeading}>{t('amount')}</Text>
        <Text style={styles.tableHeading}>{t('status')}</Text>
        <Text style={styles.tableHeading}>{t('amount')}</Text>
        </View>
        <ScrollView style={{height:300}}>
        {
           !active ? profile?.driver?.emiPayment?.payments?.filter(item => item.status==='upcoming').map(item => {
            return <Card item={item}/>
           }) :
           profile?.driver?.emiPayment?.payments?.filter(item => item.status==='paid').map(item => {
            return <Card item={item}/>
           }) 
           
        }
      
        </ScrollView>
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
        flex:1
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
        // width:40,
        flex:1,
        backgroundColor:Colors.primary,
        height:7,
        borderRadius:10,
        marginHorizontal:1
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
        borderWidth:1,
        borderRadius:20,
        width:'40%',
        backgroundColor:Colors.secondary,
       borderColor:Colors.lightGray
    },
    btnTxt:{
        alignSelf:"center",
        fontWeight:"700",
        fontSize:16,
        color:Colors.txtblack
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