import { View,Text,StyleSheet, Pressable } from "react-native"
import Rickshaw from "../../assets/jsx/Rickshaw"
import { useNavigation } from "@react-navigation/native"

const Initial = () =>{

    const navigation = useNavigation()

return <View style={styles.container}>
    <Text style={styles.logo}>LOGO</Text>
    <View style={styles.innerContainer}>
    <Rickshaw/>
    </View>
    <Pressable style={styles.btn} onPress={()=>navigation.navigate('Login')}>
        <Text>Login</Text>
    </Pressable>
    <Pressable style={styles.btn}>
        <Text>Signup</Text>
    </Pressable>
   
</View>
}

export default Initial

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:"center",
        marginHorizontal:20,
        padding:10,
        margin:10,
 
    },
    logo:{
        color:"#A4A4A4",
        fontWeight:"800",
        fontSize:36,
        fontStyle:"italic",
        marginVertical:'5%' 
    },
    innerContainer:{
        // flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginRight:10
    },
    btn:{
        padding:13,
        width:'100%',
        justifyContent:"center",
        alignItems:"center",
        margin:10,
        backgroundColor:"#D9D9D9",
        borderRadius:20
    }
})