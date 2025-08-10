import { View, StyleSheet, Text, Image, SafeAreaView, ActivityIndicator } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Rating } from "react-native-ratings";
import Header from "./components/Header";
import Colors from "../../constants/color";
import Fonts from "../../constants/font";
import { useRoute } from "@react-navigation/native";
import { useTicket } from "../../features/ticket/useTicket";

const BatteryStatus = () => {

  const route = useRoute()
  const {ticketId} = route.params
  const {ticket,loading,error,refetch} =   useTicket(ticketId)
  console.log(ticket)
  
    if (loading) {
    return (
      <SafeAreaView style={[styles.safeArea, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={[styles.safeArea, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="View Ticket" />

      <View style={styles.container}>
        {/* Battery Status Header */}
        <View style={styles.rowContainer}>
          <View style={styles.leftAlignedRow}>
            <View style={styles.circle}>
              <Image source={require("../../assets/png/batteryIcon.png")} />
            </View>
            <Text style={styles.heading}>Battery Status</Text>
          </View>
          <Entypo name="dots-three-vertical" size={20} />
        </View>

        {/* Ticket Info */}
        <View style={styles.ticketContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.rowNoPadding}>
              <AntDesign name="calendar" size={20} />
              <Text style={styles.date}>{new Date(ticket?.createdAt).toLocaleDateString()}</Text>
            </View>
            <View style={styles.codeBox}>
              <Text style={styles.codeText}>{ticket?.ticketId}</Text>
            </View>
          </View>

          <View style={styles.timeRow}>
            <Entypo name="clock" size={20} />
            <Text style={styles.date}>9:00 - 12:00AM</Text>
          </View>

          <View style={styles.engineerInfoRow}>
            <Text style={styles.serviceEngineerText}>
              Service Engineer:{" "}
              <Text style={styles.boldBlack}>9909090909</Text>
            </Text>
            <Text style={styles.callNow}>Call Now</Text>
          </View>
        </View>

        {/* Description Section */}
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionHeading}>Description</Text>
          <Text style={styles.para}>
            {ticket?.description}
          </Text>

          {/* Image/Media Row */}
          <View style={styles.mediaRow}>
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box}>
              <Entypo name="controller-play" size={50} />
            </View>
          </View>
        </View>

        {/* Rating Section */}
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>Rate Our Service</Text>
          <Rating
            type="custom"
            ratingColor="#FFFFFF"
            ratingCount={5}
            ratingBackgroundColor="#FFF"
            style={styles.ratingStars}
          />
        </View>
      </View>
    </View>
  );
};

export default BatteryStatus;
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.appBackground,
    flex: 1,
  },
  container: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 5,
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  leftAlignedRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowNoPadding: {
    flexDirection: "row",
    alignItems: "center",
    padding: 0,
  },
  circle: {
    backgroundColor: Colors.lightGray,
    padding: 10,
    borderRadius: 50,
    borderTopLeftRadius: 10,
  },
  heading: {
    marginHorizontal: 20,
    color: "#5E5E5E",
    fontWeight: "700",
    fontSize: 16,
    marginVertical: 5,
    fontFamily: Fonts.poppinsRegular,
  },
  ticketContainer: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 5,
    marginTop: 20,
  },
  date: {
    fontWeight: "500",
    fontSize: 14,
    marginHorizontal: 10,
    fontFamily: Fonts.poppinsRegular,
  },
  codeBox: {
    backgroundColor: "#EAEAEA",
    padding: 5,
    borderRadius: 5,
  },
  codeText: {
    fontSize: 12,
    color: "#ADADAD",
    fontFamily: Fonts.poppinsRegular,
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    marginTop: -20,
  },
  engineerInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginHorizontal: 0,
    marginVertical: 10,
    paddingVertical: 10,
  },
  serviceEngineerText: {
    color: "#7D7D7D",
    fontSize: 14,
    fontFamily: Fonts.poppinsRegular,
  },
  boldBlack: {
    color: "#000",
    fontWeight: "500",
  },
  callNow: {
    borderBottomWidth: 1,
    color: "#7D7D7D",
    fontFamily: Fonts.poppinsRegular,
  },
  descriptionBox: {
    backgroundColor: "#FFF",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 10,
  },
  descriptionHeading: {
    fontWeight: "500",
    color: "#5E5E5E",
    fontSize: 16,
    fontFamily: Fonts.poppinsRegular,
    marginBottom: 5,
  },
  para: {
  
    color: "#7D7D7D",
    fontSize: 12,
    marginVertical: 10,
    fontFamily: Fonts.poppinsRegular,
  },
  mediaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    marginVertical: 10,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  rating: {
    fontWeight: "400",
    color: "#676767",
    fontSize: 16,
    fontFamily: Fonts.poppinsRegular,
  },
  ratingStars: {
    marginLeft: -90,
    marginVertical: 10,
  },
  safeArea:{
        flex: 1,
     backgroundColor: Colors.appBackground 
  }
});
