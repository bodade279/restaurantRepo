import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing the icon library
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import { ageStyles, usernamestyle } from '@/constants/styles/Styles';
import CustomButton from '../../custom-component/custombutton/CustomButton';

const MobileNumberScreen = ({ navigation }) => {
  const handleBackPress = () => {
   navigation.goBack();
    // Add navigation logic here
  };
  const handleNavigation = () => {
    navigation.navigate('OtpPage')
  }
  return (
    <View style={styles.container}>

       <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('20.1425%') }} showsVerticalScrollIndicator={false}>
                                            <TouchableOpacity style={[ageStyles.arrowTouch,{left:0}]} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={hp('3%')} color="#000" />
        </TouchableOpacity>

        {/* MobileNumberScreen Content */}
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('25.8448%'), }}>
          <Text style={styles.title}>Enter Phone Number</Text>
        </View>
       

<View style={styles.inputNumbercontainer}>
  {/* Country Code Section */}
  <View style={styles.countryCodeContainer}>
    <Image
      source={{ uri: 'https://flagcdn.com/w40/us.png' }}
      style={styles.flagIcon}
    />
    <Text style={styles.countryCode}>+1</Text>
  </View>

  {/* Text Input Section */}
  <TextInput
    style={styles.textInput}
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
        </ScrollView>
        <TouchableOpacity style={usernamestyle.button}>
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
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // paddingTop: hp('5%'), // For some spacing from the top
  },
  // inputNumbercontainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#1E1E1E', // Dark background color
  //   borderRadius: wp('4.1667%'),
  //   fontFamily: 'Manrope',
  //   fontSize: wp("4.1667%"),
  //   marginTop: hp("6.6158%"),

  //   // paddingHorizontal: 10,
  //   // paddingVertical: 12,
  //   width: wp('89.3229%'),
  //   height: hp('7.1247%'),
  //   // width: '90%',

  // },
  // countryCodeContainer: {
  //   flexDirection: 'row',
  //   width: wp("14.3229%"),
  //   height: hp("5.0891%"),
  //   paddingTop: hp("1.6539%"),
  //   paddingLeft: wp("2.0833%"),
  //   justifyContent:'flex-start',
  //   // alignItems: 'center',
  //   backgroundColor: '#F5F3EF', // Light background for the country code
  //   // paddingVertical: 8,
  //   // paddingHorizontal: 10,
  //   borderRadius: wp("2.0833%"),
  //   position:'absolute',
  //   // right: wp(".1354%"),

  // },
  // flagIcon: {
  //   width: wp("5.2083%"),
  //   height: hp("1.9084%"),
  //   bottom: wp("3.1361%"),
  //   position: 'absolute',
  //   left:wp('2%')
  // },
  // countryCode: {
  //   fontSize: wp("4.1667%"),
  //   fontFamily: 'Manrope',
  //   color: '#000',
  //   bottom: wp("2.1361%"),
  //   position: 'absolute',
  //   left:wp('8%')

  // },
  // input: {
  //   flex: 1,
  //   fontSize: wp("4.1667%"),
  //   color: '#fff',
  // },

  inputNumbercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: wp('4.1667%'),
    marginTop: hp('6.6158%'),
    width: wp('89.3229%'),
    height: hp('7.1247%'),
    
    paddingHorizontal: wp('2%'),
  },
  // countryCodeContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#F5F3EF',
  //   borderRadius: wp('2.0833%'),
  //   paddingHorizontal: wp('2%'),
  //   marginRight: wp('2%'),
  //   paddingTop: hp("1.6539%"),
  //     paddingLeft: wp("2.0833%"),
  // },
  // flagIcon: {
  
  //   width: wp('5.2083%'),
  //   height: hp('3%'),
  //   marginRight: wp('1%'),
  //   marginBottom:9
  // },
  // countryCode: {
  //   marginBottom:9,
  //   fontSize: wp('4.1667%'),
  //   fontFamily: 'Manrope',
  //   color: '#000',
  // },

  countryCodeContainer: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center',
    backgroundColor: '#F5F3EF',
    borderRadius: wp('3.0833%'),
    paddingHorizontal: wp('3%'), // Add padding inside the container
    marginRight: wp('2%'),
    height: hp('5.5%'), // Adjust height for proper alignment
  },
  flagIcon: {
    width: wp('5.2083%'),
    height: hp('2%'),
    marginRight: wp('1%'), // Add spacing between flag and text
  },
  countryCode: {
    fontSize: wp('4.1667%'),
    fontFamily: 'Manrope',
    color: '#000',
  },
  
  textInput: {
    flex: 1, // Ensures it takes the remaining space
    fontSize: wp('4.1667%'),
    color: '#fff',
  },

  backButton: {
    // position: 'absolute',
    // top: hp('9.1603%'),
marginTop: hp('9.1603%'), 
 position: 'absolute',
 zIndex:99,
 width:wp("20%"),
 height:hp("20%")
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
