import { View,Text, StyleSheet } from "react-native"
import Card from "./components/Card"
import Colors from "../../constants/color"
import Fonts from "../../constants/font"
import { useTranslation } from "react-i18next"





const Home = () =>{
    const {t} = useTranslation()
    const data = [
    {heading:t('raiseTickets'),subHeading:t('raiseNewTicket'),navigationScreen:"createTicket"},
    {heading:t('viewTickets'),subHeading:t('checkStatus'),navigationScreen:"viewTicket"},
    {heading:t('reports'),subHeading:t('detailedReport'),navigationScreen:""}
]

return <View style={styles.outerContainer}>
 <View style={styles.container}>
        <Text style={styles.txtStyle}>{t('servicePage')}</Text>
            {data.map(item => <Card key={item.heading} heading={item.heading} subHeading={item.subHeading}  navigationScreen={item.navigationScreen}/>)}
</View>
</View>
}

export default Home

const styles = StyleSheet.create({
    outerContainer:{
     backgroundColor:Colors.appBackground,
     flex:1
    },
    container:{
    margin:10,
     padding:10,
    },
    txtStyle:{
       fontSize:18 ,
       fontFamily:Fonts.poppinsBold
    }
})