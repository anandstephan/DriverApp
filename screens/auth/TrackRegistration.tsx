import { StyleSheet, View,Image,Text, Pressable } from "react-native"

const TrackRegistration = () =>{
    return <View style={styles.container}>
            <View style={styles.innerContainer}>
            <View style={styles.row}>
         
                <Image
                source={require('../../assets/png/Check.png')}
                />
      
                <Text>Registered Successfully </Text>
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
            <Text style={styles.txtStyle}>Check Credit Score</Text>
            </View>
        
            <View style={[styles.innerContainer,{alignItems:"center",justifyContent:"space-between"}]}>
            <Image
            source={require('../../assets/png/services.png')}
            />
            <Text style={styles.txtStyle}>More Services</Text>
            </View>
        
            </View>
            <View style={{marginVertical:'50%'}}>
                <Pressable>
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
    alignItems:"center"
},
innerContainer:{
    // borderWidth:1,
    padding:'5%',
    borderWidth:1,
    borderRadius:10,
    borderColor:"#CBD3DF",
},
txtStyle:{
    marginVertical:'10%',
    color:"#878787",
    fontSize:14,
    fontWeight:"400"
}
})