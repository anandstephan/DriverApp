import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/auth/Login';
import Initial from '../../screens/auth/Initial';
import Otp from '../../screens/auth/Otp';
import OtpSucess from '../../screens/auth/OtpSucess';
import Register from '../../screens/auth/Register';
import ReigsterSucess from '../../screens/auth/RegisterSucess';
import TrackRegistration from '../../screens/auth/TrackRegistration';

const Stack = createNativeStackNavigator();

const  Auth =() => {
  return (
      <Stack.Navigator initialRouteName="Initial" screenOptions={{headerShown:false}}>
        <Stack.Screen name='Initial' component={Initial}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp}/>
        <Stack.Screen name="OtpSucess" component={OtpSucess}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="RegisterSucess" component={ReigsterSucess}/>
        <Stack.Screen name="TrackRegistration" component={TrackRegistration}/>
        
      </Stack.Navigator>

  );
}

export default Auth
