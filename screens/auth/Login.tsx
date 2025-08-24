import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TextInput, Pressable, ActivityIndicator } from "react-native";
import Logo from "../../assets/jsx/Logo";
import Fonts from "../../constants/font";
import Colors from "../../constants/color";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/themeSlice";
import { useState } from "react";
import { useLogin } from "../../features/login/useLogin";

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [driverId, setDriverId] = useState("DRI0030");
  const [password, setPassword] = useState("DRI0030");

  const { handleLogin, loading } = useLogin();

  const onLoginHandler = async () => {
    // dispatch(toggleDarkMode());
    handleLogin({ driverId, password }, (response: Object) => {
        console.log(response)
      if (response.message === "Login successful") {
        dispatch(toggleDarkMode());
      }
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Logo />
      </View>

      <Text style={styles.heading}>Login</Text>

      <View style={styles.primaryContainer}>
        <View style={styles.form}>
          <Text style={styles.headingText}>Driver ID</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setDriverId(e)}
            value={driverId}
          />
        </View>

        <View style={[styles.form]}>
          <Text style={styles.headingText}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={(e) => setPassword(e)}
            value={password}
          />
        </View>

        <View style={[styles.form, { marginTop: 0, marginLeft: 20 }]}>
          <Text
            style={{
              color: "#00031480",
              fontWeight: "400",
              fontSize: 14,
              fontFamily: Fonts.poppinsLight,
            }}
          >
            Forgot Password
          </Text>
          <View
            style={{
              width: "35%",
              borderWidth: 0.5,
              borderColor: "#00031480",
            }}
          />
        </View>

        <View style={styles.btnContainer}>
          <Pressable onPress={() => navigation.navigate("Otp")}>
            <Text style={{ color: "#000000", fontFamily: Fonts.poppinsRegular }}>
              Login with OTP
            </Text>
            <View style={{ borderWidth: 0.5, borderColor: "#000000" }} />
          </Pressable>

          <Pressable
            style={[styles.btn, loading && { opacity: 0.6 }]}
            onPress={onLoginHandler}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={{ color: "#FFFFFF", fontFamily: Fonts.poppinsRegular }}>
                Login
              </Text>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 20,
    padding: 10,
    margin: 10,
  },
  primaryContainer: {
    width: "100%",
    marginVertical: "10%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  heading: {
    fontWeight: "400",
    fontSize: 32,
    color: "#2F343E",
    fontFamily: Fonts.poppinsBold,
    margin: 5,
  },
  input: {
    borderColor: "#CBD3DF",
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    color: Colors.txtblack,
    paddingHorizontal: 10,
  },
  form: {
    textAlign: "center",
    width: "95%",
    marginTop: "5%",
    marginLeft: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    padding: 10,
    marginTop: "10%",
    marginHorizontal: 13,
  },
  btn: {
    padding: 13,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  headingText: {
    fontWeight: "400",
    fontSize: 15,
    fontFamily: Fonts.poppinsRegular,
  },
});
