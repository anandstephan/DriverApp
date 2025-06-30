import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Login from "./screens/auth/Login"

const App = () =>{
return     <SafeAreaProvider>
  <SafeAreaView>
  <Login/>
  </SafeAreaView>
</SafeAreaProvider>


}

export default App