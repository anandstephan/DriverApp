import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import MyProfile from './myProfile';
import Waranty from './waranty';
import ReferEarn from './ReferEarn';
import ProductInfo from './productInfo';
import FAQ from './faq';
import VideoCard from './components/VideoCard';



const Stack = createNativeStackNavigator();

const Index = () =>{
    return <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="home" component={Home}/>
    <Stack.Screen name="myProfile" component={MyProfile}/>
    <Stack.Screen name="waranty" component={Waranty}/>
    <Stack.Screen name="referAndEarn" component={ReferEarn}/>
    <Stack.Screen name="productInfo" component={ProductInfo}/>
    <Stack.Screen name="faq" component={FAQ}/>
    <Stack.Screen name="video" component={VideoCard}/>
    </Stack.Navigator>
}


export default Index