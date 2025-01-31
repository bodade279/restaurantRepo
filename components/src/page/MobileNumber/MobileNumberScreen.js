import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
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

      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('8.1425%') }} showsVerticalScrollIndicator={false}  >
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="arrow-back" size={hp('3%')} color="#000" />
        </TouchableOpacity>

        {/* MobileNumberScreen Content */}
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
            style={{ right: wp('20.8333%') }}
            placeholder="Phone number"
            placeholderTextColor="#ccc"

            keyboardType="numeric"
          />
        </View>

        {/* <TouchableOpacity style={styles.button}>
      <CustomButton
                        width={wp('88.5417%')}
                        height={hp('7.6336%')}
                        title='Continue'
                        backgroundColor={'#FEC946'}
                        borderRadius={wp('2.6042%')}
                        textAlign={'center'}
                        fontSize={wp("4.1667%")}
                          fontFamily='Manrope'
                        color={"#000000"}
                        onPress={handleNavigation}

                    />
      </TouchableOpacity> */}
        <TouchableOpacity style={{ marginTop: hp('52%') }}>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // paddingTop: hp('5%'), // For some spacing from the top
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

    // paddingHorizontal: 10,
    // paddingVertical: 12,
    width: wp('89.3229%'),
    height: hp('7.1247%'),
    // width: '90%',

  },
  countryCodeContainer: {
    flexDirection: 'row',
    width: wp("14.3229%"),
    height: hp("5.0891%"),
    paddingTop: hp("1.6539%"),
    paddingLeft: wp("2.0833%"),
    // alignItems: 'center',
    backgroundColor: '#F5F3EF', // Light background for the country code
    // paddingVertical: 8,
    // paddingHorizontal: 10,
    borderRadius: wp("2.0833%"),
    right: wp("22.1354%"),
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
    bottom: wp("0.6361%"),
    position: 'fixed'

  },
  input: {
    flex: 1,
    fontSize: wp("4.1667%"),
    color: '#fff',
  },
  backButton: {
    // position: 'absolute',
    // top: hp('9.1603%'),
    marginTop: hp('9.1603%'), paddingLeft: wp('1.5%'), position: 'absolute'
  },
  title: {
    fontSize: wp('6.5%'),
    // marginTop: hp('20%'),
    fontFamily: 'Manrope',
    // marginBottom: hp('5%'),

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
    bottom: hp('8.1425%'),
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
