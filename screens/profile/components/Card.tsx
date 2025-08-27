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

import { useLogout } from "../../../features/logout/useLogout.ts";

interface NavigationProps{
    title:string;
    navigationScreen:string;
}

const Card = ({title,navigationScreen}:NavigationProps) =>{

    const navigation = useNavigation()
    const dispatch = useDispatch()

  const { logout, loading, error, status } = useLogout();

    let icon;
    if(title==='My Profile' || title === 'मेरा प्रोफ़ाइल'){
        icon = <Profile/>
    }else if(title==="Digital Documents" || title==='डिजिटल दस्तावेज़'){
        icon= <Document/>
    }else if(title==="Warranty card" || title === 'वारंटी कार्ड'){
        icon = <CreditCard/>
    }else if(title === 'Product Information' || title === 'उत्पाद जानकारी'){
        icon = <Toolkit/>
    }
    else if(title==="Driver Agreement" || title === 'ड्राइवर अनुबंध'){
        icon = <Agreement/>
    }else if(title === "Logout" || title === 'लॉगआउट'){
        icon = <Logout/>
    }else{
        icon = <Share/>
    }

return     <Pressable onPress={async ()=>{
        console.log(title,title === "Logout")
    if(title === "Logout"){
        console.log("hhhh")
          const res =  await logout()
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