import { View,Text,StyleSheet, Pressable } from "react-native"
import Fonts from "../../../constants/font"
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from "@react-navigation/native"

interface Props{
    title:string
}
const Header = ({title}:Props) =>{
    const navigation = useNavigation()


return <View style={styles.row}>    
   
    <View style={styles.row}>
       <Pressable onPress={()=>navigation.goBack()}>  <Ionicons name="chevron-back" size={25}/></Pressable>
      <Text style={styles.txtStyle}>{title}</Text>
      </View>
      <FontAwesome name="question-circle-o" size={30} color={'black'} />
</View>
}

export default Header

const styles = StyleSheet.create({
  row:{
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:10,
  
  },
    txtStyle:{
    fontWeight:"600",
    fontSize:20,
    fontFamily:Fonts.poppinsBold
    }, 
})