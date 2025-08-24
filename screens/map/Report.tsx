import { ActivityIndicator, Image, PermissionsAndroid, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import Header from "./components/Header"
import { useEffect, useState } from "react";
import Geolocation from "@react-native-community/geolocation";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import BatterySign from "../../assets/jsx/BatterySign";
import Heart from "../../assets/jsx/Heart";
import Temperature from "../../assets/jsx/Temperature";
import Road from "../../assets/jsx/Road";
import StopWatch from "../../assets/jsx/StopWatch";
import Engine from "../../assets/jsx/Engine";
import { useNavigation, useRoute } from "@react-navigation/native";
import TabBar from "./components/TabBar";
import { useBatteryControl } from "../../features/battery/useBatteryControl";

const Report = () =>{
       const route =    useRoute()
      const [location, setLocation] = useState(null);
      const navigation = useNavigation()
      const [flag,setFlag] = useState(true)
      const [showMobilize,setShowMobilze] = useState(false)

      const data = route.params?.data 

    const {sendBatteryControl} = useBatteryControl()

  useEffect(()=>{
    setLocation({latitude:data?.lat,longitude:data?.lng})
  },[data])


    return <View style={styles.container}>
        <Header/>
        {location ? (
        <>
        <MapView
        provider={PROVIDER_GOOGLE}
          style={{ flex: 3 }}
          showsUserLocation={true} // blue dot
          initialRegion={{
            latitude: location?.latitude ,
            longitude: location?.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={location} title="You are here" />
 
        </MapView>
        {
          flag ?
          <View
          style={{marginBottom:30}}
          >     
          {
            showMobilize ?          
             <View style={[styles.rowContainer,{justifyContent:"center",}]}>
              <View>
               <Pressable onPress={()=>{
                sendBatteryControl({requestType:"mobilize"})
               }}> 
              <Engine/>
              <Text>Mobilize</Text>
              </Pressable>
              </View>
              <View>
                  <Pressable onPress={()=>{
                sendBatteryControl({requestType:"immobilize"})
               }}>
              <Engine/>
              <Text>Immobilize</Text>
              </Pressable>
              </View>
              
              </View>:null
          }

              <View style={styles.rowContainer}>
                <View style={{flex:1,marginHorizontal:10}}>
                    <Pressable style={styles.reportBtn} onPress={()=>setFlag(!flag)}>
                        <Text style={[styles.txtStyle,{textAlign:'center'}]}>Reports</Text>
                    </Pressable>
                    <View style={styles.rowContainer}>
                        <BatterySign/>
                        <Text style={styles.txtStyle}>{data.soc}%</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Heart/>
                        <Text style={styles.txtStyle}>{data.soh}%</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Temperature/>
                        <Text style={styles.txtStyle}>{Math.round(data?.temp)}C</Text>
                    </View>
                </View>
               <View style={[styles.rowContainer,{flex:2,justifyContent:'center',marginHorizontal:2}]}>
                <View style={{backgroundColor:'#2F343E',width:80,height:80,borderRadius:100,justifyContent:'center',alignItems:'center'}}>
                  <Text style={styles.bigTxt}>12</Text>
                  <Text style={styles.txtColor}>Kmph</Text>
                </View>
                <View style={{backgroundColor:'#2F343E',width:80,height:80,borderRadius:100,justifyContent:'center',alignItems:'center'}}>
                  <Text style={styles.bigTxt}>0</Text>
                  <Text style={styles.txtColor}>rpm</Text>
                </View>
            </View>
            <View style={{flex:1,marginHorizontal:10}}>
            <View style={{marginHorizontal:30,top:10}}>
            <Engine/>
            </View>
            <Pressable onPress={()=>setShowMobilze(!showMobilize)}>   
            <View style={[styles.rowContainer]}>
                <View style={{marginLeft:-10}}>
                <Engine/>
                </View>
                <Text style={styles.txtStyle}>Active</Text>
            </View>
            </Pressable>
            <View style={styles.rowContainer}>
                <StopWatch/>
                <Text style={styles.txtStyle}>{data?.timeTravelled?.durationString}</Text>
            </View>
            <View style={styles.rowContainer}>
                <Road/>
                <Text style={styles.txtStyle}>{data?.totalDistanceTravelled.toFixed(1)}KM</Text>
            </View>
            </View>
          </View>
          <View style={styles.endContainer}>
            <View style={{flex:1,height:1,backgroundColor:"#000000",marginVertical:10}}/>
            <View style={{flex:2,flexDirection:"row"}}>
              {[1,2,3,4,5].map(item => <View key={item} style={styles.box}>
                <Text style={{textAlign:"center",fontWeight:"bold"}}>{item}</Text>
              </View>)}
            </View>
            <View style={{flex:1,height:1,backgroundColor:"#000000",marginVertical:10}}/>
          </View>
        </View>
        :
        <View style={{flex:1}}>
        <TabBar/>
        </View>

        }
  
        </>
      ): <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} />
        <Text>Fetching Location</Text>
        </View>}
    </View>
}

export default Report

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    loadingContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
       rowContainer:{
        flexDirection:"row",
        alignItems:"center",
        // justifyContent:"space-between",
        gap:10,
    },
    txtStyle:{
        fontWeight:"bold",
        fontSize:15
    },
    reportBtn:{
        backgroundColor:"#57C8DC",
        width:100,
        height:40,
        padding:10,
        borderRadius:5
    },
    bigTxt:{
      color:"#FFFFFF",
      fontSize:40
    },
    txtColor:{
      color:"#FFFFFF"
    },
    endContainer:{
      flex:1,
      flexDirection:"row"
    },
    box:{
      backgroundColor:"#D9D9D9",
      marginHorizontal:10,
      width:20,
      height:20,
      
    }
})