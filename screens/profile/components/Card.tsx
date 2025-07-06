import { StyleSheet, View,Text } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import Profile from "../../../assets/jsx/Profile.jsx"
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

interface NavigationProps{
    title:string;
    navigationScreen:string;
}

const Card = ({title,navigationScreen}:NavigationProps) =>{

    const navigation = useNavigation()

return     <Pressable onPress={()=>navigation.navigate(navigationScreen)}>
 <View style={styles.rowContainer}>
    <View style={[styles.rowContainer,{marginHorizontal:10}]}>
     <Profile/>
    <Text style={styles.heading}>{title}</Text>
    </View>
    <View>
    <Entypo name="chevron-thin-right" size={15} color={'black'}/>
    </View>
</View>
    </Pressable>
}

export default Card

const styles = StyleSheet.create({
    rowContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:5
    },
    heading:{
        fontWeight:"400",
        fontSize:16,
        marginLeft:10
    }
})