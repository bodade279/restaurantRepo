import { createStackNavigator } from '@react-navigation/stack';
import OtpPage from '../page/Otp/OtpPage'
import LoginPage from '../page/loginPage/LoginPage'
import MobileNumberScreen from '../page/MobileNumber/MobileNumberScreen';
import AgePage from '../page/agePage/AgePage'
import TellMorePage from '../page/tellMorePage/TellMorePage'
import TellMoreProfile from '../page/tellMoreProfile/TellMoreProfile'
import InitialPage from '../page/initialPage/InitialPage'
import RefferalCode from '../page/refferal-code/RefferalCode'
import UserNamePage from '../page/useNamesPage/UserNamePage';
import NamePage from '../page/namePage/NamePage';
import Category from '../page/category/Category';
import Coupons from '../page/coupons/Coupons'
import ConfirmLocationPage from '../page/confirmLocation/ConfirmLocationpage'
import PrivacyAndpolicy from '../page/privacyAndpolicy/PrivacyAndpolicy'
import ChristianPage1 from '../page/christianPage1/ChristianPage1'
import ChristianPage2 from '../page/christianPage2/ChristianPage2'
import ChristianPage3 from '../page/christianPage3/ChristianPage3'

const Routing =createStackNavigator();
const RoutingPage = () => {
  return (
    <Routing.Navigator initialRouteName='ChristianPage2'>
      <Routing.Screen name="InitialPage" component={InitialPage} options={{ headerShown: false }} />
      <Routing.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
      <Routing.Screen name="OtpPage" component={OtpPage} options={{ headerShown: false }} />
      <Routing.Screen name="MobileNumberScreen" component={MobileNumberScreen} options={{ headerShown: false }} />
      <Routing.Screen name="AgePage" component={AgePage} options={{ headerShown: false }} />
      <Routing.Screen name="TellMorePage" component={TellMorePage} options={{ headerShown: false }} />
      <Routing.Screen name="TellMoreProfile" component={TellMoreProfile} options={{ headerShown: false }} />
      <Routing.Screen name="RefferalCode" component={RefferalCode} options={{ headerShown: false }} />
      <Routing.Screen name="UserNamePage" component={UserNamePage} options={{ headerShown: false }} />
      <Routing.Screen name="NamePage" component={NamePage} options={{ headerShown: false }} />
      <Routing.Screen name="Category" component={Category} options={{ headerShown: false }} />
      <Routing.Screen name="Coupons" component={Coupons} options={{ headerShown: false }} />
      <Routing.Screen name="ConfirmLocationPage" component={ConfirmLocationPage} options={{ headerShown: false }} />
      <Routing.Screen name="ChristianPage1" component={ChristianPage1} options={{ headerShown: false }} />
      <Routing.Screen name="PrivacyAndpolicy" component={PrivacyAndpolicy} options={{ headerShown: false }} />
      <Routing.Screen name="ChristianPage2" component={ChristianPage2} options={{ headerShown: false }} />
      <Routing.Screen name="ChristianPage3" component={ChristianPage3} options={{ headerShown: false }} />

      </Routing.Navigator>
  
  
  );
}

export default RoutingPage