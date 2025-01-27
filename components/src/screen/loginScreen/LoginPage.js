import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialIcons } from '@expo/vector-icons'; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; 
export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');

  return (
    <View style={styles.container}>
     
     <View style={{marginTop:31}}>
     <Text style={styles.logo}>riice</Text>
     </View>
     

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Log in to start using riice promotions.
      </Text>

      {/* Country Picker */}
      <View style={styles.inputContainer}>
        <RNPickerSelect
          onValueChange={(value) => setCountryCode(value)}
          items={[
            { label: 'United States (+1)', value: '+1' },
            { label: 'India (+91)', value: '+91' },
            { label: 'United Kingdom (+44)', value: '+44' },
          ]}
          placeholder={{ label: 'Select Country Code', value: null }}
          style={{
            inputIOS: styles.pickerInput,
            inputAndroid: styles.pickerInput,
          }}
          useNativeAndroidPickerStyle={false}
          
          Icon={() => <MaterialIcons name="keyboard-arrow-down" size={24} color="#060505" style={styles.icon} />}
        />
      </View>

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      {/* Don't have an account */}
      <TouchableOpacity style={{marginTop:34,flexDirection:'row',marginLeft:wp("47%")}}>
      <Text style={styles.accountLink}>Don’t have an account?</Text>
    <MaterialIcons name="keyboard-arrow-right" size={24} color='#007AFF' />
      
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.divider} />
      </View>
<View style={{marginTop:65}}>
 {/* Social Login Buttons */}
 <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
        <Text style={styles.socialButtonText}>continue with apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
        <Text style={styles.socialButtonText}>continue with google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
        <Text style={styles.socialButtonText}>continue with facebook</Text>
      </TouchableOpacity>
</View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  icon: {
    marginTop: 10,  // Adjust the position of the icon
    marginRight: 10,  // Add spacing to the right of the icon
  },

  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'left',
    color: '#060505',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 27,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    // paddingHorizontal: 10,
    marginTop:78,
    height: 48,
    width:340,
   
  },
  pickerInput: {
    fontSize: 16,
    paddingVertical: 12,
    paddingLeft:10
    
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    // marginBottom: 10,
  },
  accountLink: {
    color: '#007AFF',
    textAlign: 'right',
    fontSize:14
    // marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    height: 48,
    width:340,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 20,
    marginTop:51,
    marginBottom:78
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#666',
  },
  socialButton: {
    height: 48,
    width:340,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  appleButton: {
    backgroundColor: '#000',
  },
  googleButton: {
    backgroundColor: '#4285F4',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'capitalize',
  },
});
