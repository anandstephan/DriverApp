import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import MyProfile from './myProfile';
import Waranty from './waranty';
import ReferEarn from './ReferEarn';



const Stack = createNativeStackNavigator();

const Index = () =>{
    return <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="home" component={Home}/>
    <Stack.Screen name="myProfile" component={MyProfile}/>
    <Stack.Screen name="waranty" component={Waranty}/>
    <Stack.Screen name="referAndEarn" component={ReferEarn}/>
    </Stack.Navigator>
}


export default Index