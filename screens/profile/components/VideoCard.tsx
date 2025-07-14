import {StyleSheet, View,Text} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Colors from '../../../constants/color'
const VideoCard = () =>{
return <View style={styles.container}>
      <View style={styles.rowContainer}>
                  <View style={styles.circle}>
                      <Entypo name="controller-play" size={20}/>
                  </View>
                  <Text style={styles.label}>
                     Videos
                  </Text>
                  <View/>
                  <View/>
                  <View/>
                  <View/>
                  <View/>
            <View/>
                  <View/>
      
              </View>
        <View style={[styles.rowContainer,{marginHorizontal:40}]}>
        <View style={styles.videoBox}>
        <Text style={{marginTop:64,backgroundColor:"#A6A6A6"}}>How to use the battery</Text>
        </View>
        <View style={styles.videoBox}>
        <Text style={{marginTop:64,backgroundColor:"#A6A6A6"}}>How to use the battery</Text>
        </View>
        </View>
</View>
}

export default VideoCard

const styles = StyleSheet.create({
    container:{
   backgroundColor:Colors.white,
        // height:300,
        borderRadius:10,
        marginHorizontal:20,
        marginVertical:20,
        padding:20,
    },
    rowContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    circle:{
               borderRadius:100,
        padding:10,
        backgroundColor:Colors.white
    },
    label:{
    fontSize: 14,
    color: '#333',
    fontWeight:"400"
    },
    videoBox:{
        marginVertical:5,
        width:100,
        height:100,
        backgroundColor:Colors.white,
        borderWidth:1,
        borderColor:Colors.lightGray
    }
})