import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Login from "./screens/auth/Login"
import { NavigationContainer } from '@react-navigation/native';
import Auth from './navigator/auth/Auth';
import Main from './navigator/bottom/Main';

const App = () =>{

return       <NavigationContainer>
<SafeAreaProvider>
  <SafeAreaView style={{flex:1}}>
    {true ?<Main/> :<Auth/>}
  </SafeAreaView>
</SafeAreaProvider>
</NavigationContainer>

}

export default App