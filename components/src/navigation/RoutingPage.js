import { createStackNavigator } from '@react-navigation/stack';
import OtpPage from '../page/Otp/OtpPage'
import LoginPage from '../page/loginPage/LoginPage'
import MobileNumberScreen from '../page/MobileNumber/MobileNumberScreen';
import AgePage from '../page/agePage/AgePage'
import TellMorePage from '../page/tellMorePage/TellMorePage'
import TellMoreProfile from '../page/tellMoreProfile/TellMoreProfile'
import InitialScreen from '../page/initialPage/InitialScreen'
import RefferalCode from '../page/refferal-code/RefferalCode'
const Routing =createStackNavigator();
const RoutingPage = () => {
  return (
    <Routing.Navigator initialRouteName='InitialScreen'>
      <Routing.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />
      <Routing.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
      <Routing.Screen name="OtpPage" component={OtpPage} options={{ headerShown: false }} />
      <Routing.Screen name="MobileNumberScreen" component={MobileNumberScreen} options={{ headerShown: false }} />
      <Routing.Screen name="AgePage" component={AgePage} options={{ headerShown: false }} />
      <Routing.Screen name="TellMorePage" component={TellMorePage} options={{ headerShown: false }} />
      <Routing.Screen name="TellMoreProfile" component={TellMoreProfile} options={{ headerShown: false }} />
      <Routing.Screen name="RefferalCode" component={RefferalCode} options={{ headerShown: false }} />
      </Routing.Navigator>
  
  
  );
}

export default RoutingPage