import { StyleSheet, View,Text } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import Profile from "../../../assets/jsx/Profile.jsx"
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import Fonts from "../../../constants/font.js";
import Document from "../../../assets/jsx/Document.jsx";
import CreditCard from "../../../assets/jsx/CreditCard.jsx";
import Toolkit from "../../../assets/jsx/Toolkit.jsx";
import Agreement from "../../../assets/jsx/Agreement.jsx";
import Share from "../../../assets/jsx/Share.jsx";
import Logout from "../../../assets/jsx/Logout.jsx";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../../store/themeSlice.js";
import { logoutUser } from "../../../features/logout/logoutService.ts";
import { storage } from "../../../utilities/storage.ts";
import { useLogout } from "../../../features/logout/useLogout.ts";

interface NavigationProps{
    title:string;
    navigationScreen:string;
}

const Card = ({title,navigationScreen}:NavigationProps) =>{

    const navigation = useNavigation()
    const dispatch = useDispatch()
    let icon;
    if(title==='My Profile'){
        icon = <Profile/>
    }else if(title==="Digital Documents"){
        icon= <Document/>
    }else if(title==="Warranty card"){
        icon = <CreditCard/>
    }else if(title === 'Product Information'){
        icon = <Toolkit/>
    }
    else if(title==="Driver Agreement"){
        icon = <Agreement/>
    }else if(title === "Logout"){
        icon = <Logout/>
    }else{
        icon = <Share/>
    }

return     <Pressable onPress={async ()=>{
    
    if(title === "Logout"){
        console.log("===")
          const res =  await useLogout()
          console.log('res',res)
            dispatch(toggleDarkMode())
    }else{
        navigation.navigate(navigationScreen)
    }
}}>
 <View style={styles.rowContainer}>
    <View style={[styles.rowContainer,{marginHorizontal:10}]}>
    {icon}
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
        marginLeft:10,
        fontFamily:Fonts.poppinsRegular
    }
})