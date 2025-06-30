import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Login from "./screens/auth/Login"
import { NavigationContainer } from '@react-navigation/native';
import Auth from './navigator/auth/Auth';

const App = () =>{

return       <NavigationContainer>
<SafeAreaProvider>
  <SafeAreaView style={{flex:1}}>
    <Auth/>
  </SafeAreaView>
</SafeAreaProvider>
</NavigationContainer>

}

export default App