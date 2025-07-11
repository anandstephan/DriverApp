import {  ScrollView, View,Pressable,Text, StyleSheet } from "react-native"
import ProductCard from "./components/ProductCard"
import { useNavigation } from "@react-navigation/native"
import VideoCard from "./components/VideoCard"

const ProductInfo = () =>{
    const navigation = useNavigation()
return <ScrollView>
        <ProductCard title="product"/>
        <VideoCard/>
        <ProductCard title="document"/>
        <Pressable style={styles.btnContainer} onPress={()=>navigation.navigate('faq')}>
            <Text style={styles.label}>FAQ</Text>
        </Pressable>
        
</ScrollView>
}

export default ProductInfo

const styles = StyleSheet.create({
    btnContainer:{
        padding:10,
        margin:10,
        backgroundColor:"#D9D9D9",
        justifyContent:"center",
        alignItems:"center"
    },
    label:{
        fontWeight:"600",
        fontSize:16   
    }
})