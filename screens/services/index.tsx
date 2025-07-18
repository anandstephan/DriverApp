import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import CreateTicket from './createTicket';
import ViewTicket from './viewTicket';
import BatteryStatus from './BatteryStatus';


const Stack = createNativeStackNavigator();

const Index = () =>{
    return <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="home" component={Home}/>
    <Stack.Screen name="createTicket" component={CreateTicket}/>
    <Stack.Screen name="viewTicket" component={ViewTicket}/>
    <Stack.Screen name="batteryStatus" component={BatteryStatus}/>
    </Stack.Navigator>
}


export default Index