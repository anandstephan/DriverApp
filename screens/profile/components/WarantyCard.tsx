import { StyleSheet, View, Text, Image } from "react-native";
import Tag from "../../../assets/jsx/Tag";
import Colors from "../../../constants/color";
import Fonts from "../../../constants/font";
import { addYearsAndFormat, getTimeLeftFromNow, getYearsLeftFromNow } from "../../../utilities/dateFormat";

const WarantyCard = ({item,type}:any) => {
console.log("item",type)
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.cardNumber}>{item?.serialNo}</Text>
          <Text style={styles.subHeading}>Serial Number</Text>
          <Text style={styles.validTill}>Valid Till: {addYearsAndFormat(item.handoverDate,type==="battery"?3:1)}</Text>
          <View style={styles.line} />
        </View>
        <Image source={require("../../../assets/png/Clock.png")} />
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.rowContainer}>
          <View>
            <Text style={styles.cardNumber}>Warranty:</Text>
            <Text style={styles.cardNumber}>{getTimeLeftFromNow(type==='charger' ? 1 :3).yearsLeft}   Year</Text>
          </View>
          <View>
            <Text style={styles.cardNumber}>Days Left:</Text>
            <Text style={styles.cardNumber}>{getTimeLeftFromNow(type==='charger' ? 1 :3).daysLeft}</Text>
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
