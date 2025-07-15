import { StyleSheet } from "react-native"
import { View } from "react-native"
import Colors from "../../constants/color"
import Header from "../services/components/Header"
import DocumentCard from "./components/DocumentCard"

const Document = () =>{
return <View style={styles.container}>
    <Header title="Digital Documents"/>

    <View style={styles.innerContainer}>
    <DocumentCard/>
    <DocumentCard/>

    </View>
</View>
}

export default Document

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackground
    },
    innerContainer:{
        marginVertical:20
    }
})