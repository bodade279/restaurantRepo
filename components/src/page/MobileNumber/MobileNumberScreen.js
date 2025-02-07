import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing the icon library
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import { ageStyles } from '@/constants/styles/Styles';
import CustomButton from '../../custom-component/custombutton/CustomButton';

const MobileNumberScreen = ({ navigation }) => {
  const handleBackPress = () => {
    console.log('Back button pressed');
    // Add navigation logic here
  };
  const handleNavigation = () => {
    navigation.navigate('OtpPage')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Icon name="arrow-back" size={hp('3%')} color="#000" />
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('25.8448%'), }}>
          <Text style={styles.title}>Enter Phone Number</Text>
        </View>
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
      </View>

      <TouchableOpacity style={styles.button}>
        <CustomButton
          width={wp('88.5417%')}
          height={hp('7.6336%')}
          title='Continue'
          backgroundColor={'#FEC946'}
          borderRadius={wp('2.6042%')}
          textAlign={'center'}
          fontSize={wp("4.1667%")}
          color={"#000000"}
          fontFamily='Manrope'
          onPress={handleNavigation}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    width: wp('90%'), // Ensure content fits within the screen width
  },
  inputNumbercontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E', // Dark background color
    borderRadius: wp('4.1667%'),
    fontFamily: 'Manrope',
    fontSize: wp("4.1667%"),
    marginTop: hp("6.6158%"),
    width: wp('89.3229%'),
    height: hp('7.1247%'),
  },
  countryCodeContainer: {
    flexDirection: 'row',
    width: wp("14.3229%"),
    height: hp("5.0891%"),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F3EF', 
    borderRadius: wp("2.0833%"),
    marginRight: wp("2%"),
    marginLeft: wp("2%"),
  },
  flagIcon: {
    width: wp("5.2083%"),
    height: hp("1.9084%"),
    marginRight: wp("1.3021%"),
  },
  countryCode: {
    fontSize: wp("4.1667%"),
    fontFamily: 'Manrope',
    color: '#000',
  },
  input: {
    flex: 1,
    fontSize: wp("4.1667%"),
    color: '#fff', 
  },
  backButton: {
    position: 'absolute',
    top: hp('5%'),
    left: wp('5%'),
  },
  title: {
    fontSize: wp('6.5%'),
    fontFamily: 'Manrope',
  },
  button: {
    position: 'absolute',
    bottom: hp('5%'),
    width: wp('90%'),
    alignItems: 'center',
  },
});

export default MobileNumberScreen;
