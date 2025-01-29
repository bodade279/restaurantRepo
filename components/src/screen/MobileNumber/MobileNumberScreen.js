import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MobileNumberScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Phone number</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+1</Text>
        <TextInput style={styles.phoneInput} placeholder="Phone number" keyboardType="phone-pad" />
      </View>
      <TouchableOpacity style={{ marginTop: 79, alignSelf: 'center', justifyContent: 'center' }}>
        <CustomButton
          width={340}
          height={60}
          title='Continue'
          backgroundColor={'#FEC946'}
          borderRadius={10}
          textAlign={'center'}
          fontSize={16}
          color={"#000000"}

        />

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: hp('3%'),
    marginBottom: hp('2%'),
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: wp('2%'),
    width: wp('80%'),
    padding: wp('2%'),
    marginBottom: hp('2%'),
  },
  countryCode: {
    fontSize: hp('2.5%'),
    marginRight: wp('2%'),
  },
  phoneInput: {
    flex: 1,
    fontSize: hp('2.5%'),
  },
  button: {
    backgroundColor: '#F7B603',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('2%'),
  },
  buttonText: {
    color: '#fff',
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
});

export default MobileNumberScreen;