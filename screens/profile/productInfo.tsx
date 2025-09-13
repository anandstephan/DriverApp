import {  ScrollView, View,Pressable,Text, StyleSheet } from "react-native"
import ProductCard from "./components/ProductCard"
import { useNavigation } from "@react-navigation/native"
import VideoCard from "./components/VideoCard"
import Colors from "../../constants/color"
import Header from "../services/components/Header"
import Fonts from "../../constants/font"
import { useTranslation } from "react-i18next"
import { useProductInfo } from "../../features/productInfo/useProductInfo"

const ProductInfo = () =>{
    const navigation = useNavigation()
    const {t} = useTranslation()
    const {products,faqs} = useProductInfo()
    console.log("+++++++",products)        


return <View style={styles.container}>
    <Header title={t('productInfo')}/>
    <ScrollView>
        <ProductCard title="product"/>
        <VideoCard/>
        <ProductCard title="document"/>
        <Pressable style={styles.btnContainer} onPress={()=>navigation.navigate('faq',{faqs})}>
            <Text style={styles.label}>FAQ</Text>
        </Pressable>
        
</ScrollView>
</View>
}

export default ProductInfo

const styles = StyleSheet.create({
    btnContainer:{
        padding:10,
        margin:10,
        backgroundColor:Colors.appBackground,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:Colors.lightGray
    },
    label:{
        fontWeight:"600",
        fontSize:16,
        fontFamily:Fonts.poppinsBold   
    },
    container:{
        flex:1,
        backgroundColor:Colors.appBackground
    }
})