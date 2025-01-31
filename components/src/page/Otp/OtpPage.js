import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing the icon library
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import CustomButton from '../../custom-component/custombutton/CustomButton';
import { ageStyles } from '@/constants/styles/Styles';

const OtpPage = ({navigation}) => {
  const handleBackPress = () => {
    console.log('Back button pressed');
    // Add navigation logic here
  };

  const handleNavigation=()=>{
    navigation.navigate('NamePage')
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom:hp('0%')}} showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={{marginTop:hp('6.7964%'),paddingLeft:wp('6.5%'),position:'absolute'}}>
    <CustomArrow
    leftarrow={true}
    cl={true}
    />
      </TouchableOpacity> 

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>

     
      <Text style={styles.title}>OTP Verification</Text>
     
     <View style={{marginTop:hp('4.0712%')}}>
     <TextInput
            style={ageStyles.input}
           
          />
     </View>


           <View style={{ marginTop: hp('2.0356%') }}>
      <Text style={styles.resendText}>
        Did not receive it <Text style={styles.resendLink}>resend</Text>
      </Text>
      </View>
      <TouchableOpacity style={{ marginTop: hp('41%'), }}>
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
                </TouchableOpacity>
             </View>
             </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'#fff',
   
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

  fontFamily:'Manrope',
    marginBottom: hp('5%'),
    
  },
  otpInput: {
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
    fontFamily:'Manrope'
  },
  resendLink: {
    color: '#000',
    // fontWeight: 'bold',
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
    // fontWeight: 'bold',
  },
});

export default OtpPage;
