
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Main = () =>{
    return <Tab.Navigator
        >
          <Tab.Screen name="Assets" component={()=>{}} />
          <Tab.Screen name="My Wallet" component={()=>{}} />
          <Tab.Screen name="Setting" component={()=>{}} />
          <Tab.Screen name="My Profile" component={()=>{}} />
        </Tab.Navigator>
}

export default Main