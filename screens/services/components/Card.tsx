import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View,Text, Pressable } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto'

interface Txt{
    heading:String;
    subHeading:String;
}

const Card = ({heading,subHeading}:Txt) =>{
    const navigation = useNavigation()
return <Pressable onPress={()=>navigation.navigate("viewTicket")}>
<View style={styles.row}>
        <View>
            <Fontisto name="player-settings" size={25} color={'gray'}/>
        </View>
        <View>
            <View style={styles.container}>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.txtStyle}>{subHeading}</Text>
            </View>
        </View>
        <View>
        <AntDesign name="right" size={20} />
        </View>
</View>
</Pressable>
}

export default Card
const styles = StyleSheet.create({
row:{
    flexDirection:"row",
    backgroundColor:"#F2F2F2",
    justifyContent:"space-between",
    alignItems:"center",
    borderRadius:15,
    padding:'10%',
    margin:'5%'
},
txtStyle:{
    color:"#7D7D7D",
    fontWeight:"400",
    fontSize:14
},
heading:{
    fontWeight:"400",
    color:"#000000"
},
container:{
    padding:5,

}
})