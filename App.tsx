import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Login from "./screens/auth/Login"
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';
import First from './First';
const App = () =>{
  



return       <NavigationContainer>
  <Provider store={store}>
<SafeAreaProvider>
  <SafeAreaView style={{flex:1}}>
    <First/>
  </SafeAreaView> 
</SafeAreaProvider>
</Provider>
</NavigationContainer>

}

export default App