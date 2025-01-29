import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { loginStyles } from '@/constants/styles/Styles';
import CustomButton from '../../custom-component/custombutton/CustomButton';
export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');

  return (
    <View style={loginStyles.container}>
      <ScrollView >
        <View style={loginStyles.main}>
          <Image source={require('../../../../assets/images/Logo (1).png')} style={{ width: 116, height: 43 }} resizeMode='contain' />
        </View>
        <View style={{ paddingLeft: wp('6.5%') }}>
          <Text style={loginStyles.subtitle}>
            Log in to start using riice promotions.
          </Text>
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          // paddingHorizontal: 20,
          backgroundColor: '#fff',
        }}>
          <View style={loginStyles.inputContainer}>
            <RNPickerSelect
              onValueChange={(value) => setCountryCode(value)}
              items={[
                { label: 'United States (+1)', value: '+1' },
                { label: 'India (+91)', value: '+91' },
                { label: 'United Kingdom (+44)', value: '+44' },
              ]}
              placeholder={{ label: 'Select Country Code', value: null }}
              style={{
                inputIOS: loginStyles.pickerInput,
                inputAndroid: loginStyles.pickerInput,
              }}
              useNativeAndroidPickerStyle={false}

              Icon={() => <MaterialIcons name="keyboard-arrow-down" size={24} color="#060505" style={loginStyles.icon} />}
            />
          </View>

          {/* Phone Number Input */}

          <TextInput
            style={loginStyles.input}
            placeholder="Phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          {/* Don't have an account */}
          <TouchableOpacity style={{ marginTop: hp('4.3257%'), flexDirection: 'row', marginLeft: wp("47%") }}>
            <Text style={loginStyles.accountLink}>Don’t have an account?</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color='#007AFF' />

          </TouchableOpacity>
          <View style={loginStyles.loginButton}>
            <CustomButton
              height={hp('6.1069%')}
              width={wp('88.5417%')}
              title='Log in'
              backgroundColor={'#1964F7'}
              borderRadius={wp('2.0833%')}
              textAlign={'center'}
              fontSize={wp('4.1667%')}
              color={"#FEFEFE"}

            />
          </View>
          <View style={loginStyles.dividerContainer}>
            <View style={loginStyles.divider} />
            <Text style={loginStyles.orText}>or</Text>
            <View style={loginStyles.divider} />
          </View>
          <View style={{ marginTop: 65 }}>

            <TouchableOpacity style={[loginStyles.socialButton, loginStyles.appleButton]}>
              <Text style={loginStyles.socialButtonText}>continue with apple</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[loginStyles.socialButton, loginStyles.googleButton]}>
              <Text style={loginStyles.socialButtonText}>continue with google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[loginStyles.socialButton, loginStyles.facebookButton]}>
              <Text style={loginStyles.socialButtonText}>continue with facebook</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}


