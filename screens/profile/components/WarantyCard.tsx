import { StyleSheet, View, Text, Image } from "react-native";
import Tag from "../../../assets/jsx/Tag";
import Colors from "../../../constants/color";
import Fonts from "../../../constants/font";

const WarantyCard = ({item}:any) => {

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.cardNumber}>{item?.serialNo}</Text>
          <Text style={styles.subHeading}>Serial Number</Text>
          <Text style={styles.validTill}>Valid Till: 07/2028</Text>
          <View style={styles.line} />
        </View>
        <Image source={require("../../../assets/png/Clock.png")} />
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.cardNumber}>Warranty:</Text>
            <Text style={styles.cardNumber}>3 Year</Text>
          </View>
          <View>
            <Text style={styles.cardNumber}>Days Left:</Text>
            <Text style={styles.cardNumber}>870</Text>
          </View>
          <Image
            style={styles.qrImage}
            source={require("../../../assets/png/QR.png")}
          />
        </View>

        <View style={styles.tag}>
          <Tag />
        </View>

        <View style={styles.extendWarranty}>
          <Text style={styles.txtStyle}>Extend warranty - Tap to Pay</Text>
        </View>
      </View>
    </View>
  );
};

export default WarantyCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  innerContainer: {
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subHeading: {
    fontSize: 15,
    marginTop: -10,
    marginHorizontal: 10,
    fontFamily: Fonts.poppinsRegular,
  },
  cardNumber: {
    color: Colors.txtblack,
    fontSize: 20,
    fontWeight: "500",
    margin: 10,
    fontFamily: Fonts.poppinsRegular,
  },
  validTill: {
    color: Colors.txtblack,
    fontSize: 14,
    fontWeight: "500",
    margin: 10,
    fontFamily: Fonts.poppinsRegular,
  },
  line: {
    width: "100%",
    backgroundColor: Colors.primary,
    height: 7,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  qrImage: {
    width: "28%",
    height: "100%",
  },
  tag: {
    position: "absolute",
    top: "85%",
  },
  extendWarranty: {
    backgroundColor: Colors.secondary,
    borderRadius: 50,
    marginHorizontal: 30,
    padding: 5,
    marginVertical: 10,
  },
  txtStyle: {
    fontWeight: "400",
    color: Colors.white,
    marginHorizontal: 20,
    fontSize: 14,
    textAlign: "center",
  },
});
