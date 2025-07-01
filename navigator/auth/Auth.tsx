import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/auth/Login';
import Initial from '../../screens/auth/Initial';
import Otp from '../../screens/auth/Otp';
import OtpSucess from '../../screens/auth/OtpSucess';

const Stack = createNativeStackNavigator();

const  Auth =() => {
  return (
      <Stack.Navigator initialRouteName="OtpSucess" screenOptions={{headerShown:false}}>
        <Stack.Screen name='Initial' component={Initial}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} options={{
          headerShown:true
        }}/>
        <Stack.Screen name="OtpSucess" component={OtpSucess}/>
      </Stack.Navigator>

  );
}

export default Auth
