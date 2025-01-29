import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing the icon library
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';

const MobileNumberScreen = () => {
  const handleBackPress = () => {
    console.log('Back button pressed');
    // Add navigation logic here
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Icon name="arrow-back" size={hp('3%')} color="#000" />
      </TouchableOpacity>

      {/* MobileNumberScreen Content */}
      <Text style={styles.title}>Enter Phone Number</Text>
      <View style={styles.inputNumbercontainer}>
        <View style={styles.countryCodeContainer}>
          <Image
            source={{ uri: 'https://flagcdn.com/w40/us.png' }}
            style={styles.flagIcon}
          />
          <Text style={styles.countryCode}>+1</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Phone number"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // paddingTop: hp('5%'), // For some spacing from the top
  },
  inputNumbercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E', // Dark background color
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: '90%',
    alignSelf: 'center',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F3EF', // Light background for the country code
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  flagIcon: {
    width: 20,
    height: 15,
    marginRight: 5,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: hp('2%'),
    left: wp('5%'),
    zIndex: 1,
  },
  title: {
    fontSize: hp('3%'),
    marginTop: hp('20%'),

    marginBottom: hp('5%'),
    fontWeight: 'bold',
  },
  MobileNumberScreenInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: wp('2%'),
    width: wp('90%'),
    height: hp('6%'),
    fontSize: hp('3%'),
    marginBottom: hp('2%'),
    backgroundColor: '#000',
    color: '#F7B603',
    letterSpacing: wp('2%'),
  },
  resendText: {
    fontSize: hp('2%'),
    marginBottom: hp('2%'),
    color: 'grey',
  },
  resendLink: {
    color: '#000',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#F7B603',
    width: wp('90%'),
    height: hp('7%'),
    position: 'absolute',
    bottom: 50,
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
});

export default MobileNumberScreen;
