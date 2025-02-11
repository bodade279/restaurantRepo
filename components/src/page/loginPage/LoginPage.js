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
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { loginStyles } from '@/constants/styles/Styles';
import CustomButton from '../../custom-component/custombutton/CustomButton';
export default function LoginPage({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');

  return (
    <View style={loginStyles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:hp('8.1425%')}} showsVerticalScrollIndicator={false}>
        <View style={loginStyles.main}>
          <Image source={require('../../../../assets/images/Logo (1).png')} style={{ width: wp('30.2083%'), height: hp('5.4707%') }} resizeMode='contain' />
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
            {/* <RNPickerSelect
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
            /> */}

            <RNPickerSelect
              onValueChange={(value) => setCountryCode(value)}
              items={[
                { label: 'United States (+1)', value: '+1' },
                { label: 'India (+91)', value: '+91' },
                { label: 'United Kingdom (+44)', value: '+44' },
              ]}
              placeholder={{ label: 'Select Country Code', value: null }}
              placeholderTextColor={'black'}
              useNativeAndroidPickerStyle={false}
              // Sets the dropdown icon color
              style={{

                fontSize: wp("4.1667%"),
                paddingVertical: 0,
                // paddingHorizontal: wp("2.0833%"),
                height: "100%",
            
                placeholder: { color: '#0605054D', fontFamily: 'Manrope',paddingLeft:wp('2.0833%'), }
              }}
            />
            <FontAwesome name="chevron-down" size={13}
              color="#878E99" style={{
                
                justifyContent:'flex-end',
                alignSelf:'flex-end',
                bottom: hp("3.9084%"),
                paddingRight: wp("2.0833%"),
              }} />
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
          <TouchableOpacity onPress={() => navigation.navigate('MobileNumberScreen')} style={{ marginTop: hp('4.3257%'), flexDirection: 'row', marginLeft: wp("47%") }}>
            <Text style={loginStyles.accountLink}>Don’t have an account?</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color='#007AFF' style={{ bottom: hp('0.3817%'), position: 'fixed' }} />

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
              marginBottom={hp('0.7%')}

            />
          </View>
          <View style={loginStyles.dividerContainer}>
            <View style={loginStyles.divider} />
            <Text style={loginStyles.orText}>or</Text>
            <View style={loginStyles.divider} />
          </View>
          <View style={{ marginTop: hp('8.2697%') }}>

            <TouchableOpacity style={[loginStyles.socialButton, loginStyles.appleButton]}>
              <Text style={loginStyles.socialButtonText}>continue with apple</Text>
              <Image source={require('../../../../assets/images/apple.png')} style={{ width: wp('6.25%'), height: hp('3.0534%'), }} resizeMode='contain' />
            </TouchableOpacity>

            <TouchableOpacity style={[loginStyles.socialButton, loginStyles.googleButton]}>
              <Text style={[loginStyles.socialButtonText, { color: '#1958F7' }]}>continue with google</Text>
              <Image source={require('../../../../assets/images/google.png')} style={{ width: wp('6.25%'), height: hp('3.0534%'), }} resizeMode='contain' />
            </TouchableOpacity>

            <TouchableOpacity style={[loginStyles.socialButton, loginStyles.facebookButton]}>
              <Text style={loginStyles.socialButtonText}>continue with facebook</Text>
              <Image source={require('../../../../assets/images/facebook.png')} style={{ width: wp('6.25%'), height: hp('3.0534%'), }} resizeMode='contain' />

            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}


