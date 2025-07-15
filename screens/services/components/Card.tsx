import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import Fonts from "../../../constants/font";
import Colors from "../../../constants/color";

interface Txt {
  heading: String;
  subHeading: String;
  navigationScreen: String;
}

const Card = ({ heading, subHeading, navigationScreen }: Txt) => {
  const navigation = useNavigation();
  let icons;

  if (heading === "Raise Tickets") {
    icons = <Fontisto name="player-settings" size={25} color={Colors.txt} />;
  } else if (heading === "View Tickets") {
    icons = <Ionicons name="location-outline" size={25} />;
  } else {
    icons = <Feather name="pie-chart" size={25} />;
  }

  return (
    <Pressable onPress={() => navigation.navigate(navigationScreen)}>
      <View style={styles.row}>
        {icons}
        <View style={styles.divider} />
        <View style={styles.container}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.txtStyle}>{subHeading}</Text>
        </View>
        <View style={styles.iconRight}>
          <AntDesign name="right" size={20} />
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    padding: '8%',
    margin: '5%',
  },
  container: {
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
  },
  heading: {
    fontWeight: "400",
    color: Colors.txtblack,
    fontFamily: Fonts.poppinsRegular,
    fontSize: 16,
    marginBottom: 4,
  },
  txtStyle: {
    color: Colors.txtblack,
    fontWeight: "400",
    fontSize: 14,
    fontFamily: Fonts.poppinsLight,
  },
  iconRight: {
    marginLeft: 10,
  },
  divider: {
    borderWidth: 1,
    height: '180%',
    borderColor: "#CDCDCD",
    marginHorizontal: 20,
  },
});
