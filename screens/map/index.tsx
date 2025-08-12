import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './MapScreen';
import Report from './Report';
import Notification from './Notification';

const Stack = createNativeStackNavigator();


const Index = () =>{
return <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='map' component={MapScreen}/>
    <Stack.Screen name="Report" component={Report}/>
    <Stack.Screen name="Notification" component={Notification}/>
</Stack.Navigator>
}

export default Index