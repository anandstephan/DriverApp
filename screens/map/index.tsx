import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './MapScreen';

const Stack = createNativeStackNavigator();


const Index = () =>{
return <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='map' component={MapScreen}/>
</Stack.Navigator>
}

export default Index