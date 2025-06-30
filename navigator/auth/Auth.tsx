import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/auth/Login';
import Initial from '../../screens/auth/Initial';

const Stack = createNativeStackNavigator();

const  Auth =() => {
  return (
      <Stack.Navigator initialRouteName="Initial" screenOptions={{headerShown:false}}>
        <Stack.Screen name='Initial' component={Initial}/>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>

  );
}

export default Auth
