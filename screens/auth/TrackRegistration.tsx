import { StyleSheet, View,Image,Text, Pressable } from "react-native"
import { useDispatch } from "react-redux"
import { toggleLoggedIn } from "../../store/themeSlice"
import Fonts from "../../constants/font"

const TrackRegistration = () =>{
    const dispatch = useDispatch()



    return <View style={styles.container}>
            <View style={styles.innerContainer}>
            <View style={styles.row}>
         
                <Image
                source={require('../../assets/png/Check.png')}
                />
      
                <Text style={styles.heading}>Registered Successfully </Text>
                <View/>
                <View/>
                <View/>
            </View>
            <Text style={styles.txtStyle}>Our Team will contact you shortly! Meanwhile browse our offerings</Text>
            </View>
            <View style={[styles.row,{marginVertical:20}]}>
            <View style={[styles.innerContainer,{alignItems:"center",justifyContent:"space-between"}]}>
            <Image
            source={require('../../assets/png/catalogue.png')}
            />
            <Text style={styles.txtStyle}>View Catalogue</Text>
            </View>
        
            <View style={[styles.innerContainer,{alignItems:"center",justifyContent:"space-between"}]}>
            <Image
            source={require('../../assets/png/Battery.png')}
            />
            <Text style={styles.txtStyle}>Battery Resale</Text>
            </View>
        
            </View>
            <View style={[styles.row,{marginVertical:10}]}>
            <View style={[styles.innerContainer,{alignItems:"center",justifyContent:"space-between"}]}>
            <Image
            source={require('../../assets/png/creditCard.png')}
            />
            <Text style={styles.txtStyle}>Check Credit {'\n'} Score</Text>
            </View>
        
            <View style={[styles.innerContainer,{alignItems:"center",justifyContent:"space-between"}]}>
            <Image
            source={require('../../assets/png/services.png')}
            />
            <Text style={styles.txtStyle}>More Services</Text>
            </View>
            </View>
            <View style={{marginVertical:'50%'}}>
                <Pressable onPress={()=>dispatch(toggleLoggedIn())}>
                <Text style={{color:"#00A6FF",textAlign:"center"}}>Track Registration</Text>
                </Pressable>
      
            </View>
    </View>
}

export default TrackRegistration

const styles = StyleSheet.create({
container:{
padding:10,
margin:'5%',
},
row:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
},
innerContainer:{
    // borderWidth:1,
    padding:'5%',
    borderWidth:1,
    borderRadius:10,
    borderColor:"#CBD3DF",
    backgroundColor:"#FFFFFF"
},
txtStyle:{
    marginVertical:'10%',
    color:"#878787",
    fontSize:14,
    fontWeight:"400",
    fontFamily:Fonts.poppinsRegular,
    textAlign:"center"
},
   heading:{
        fontWeight:"400",
        fontSize:22,
        lineHeight:32,
        color:"#101010",
        marginVertical:10,
        fontFamily:Fonts.poppinsRegular
    },
})