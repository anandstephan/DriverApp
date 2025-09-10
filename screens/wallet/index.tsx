import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Payment from './payment';
import Summary from './summary';



const Stack = createNativeStackNavigator();

const Index = () =>{
    return <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="home" component={Home}/>
    <Stack.Screen name="payment" component={Payment}/>
    {/* <Stack.Screen name="summary" component={Summary}/> */}
    </Stack.Navigator>
}


export default Index