import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, Image, ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomButton from '../../custom-component/custombutton/CustomButton';
import { usernamestyle } from '@/constants/styles/Styles';


export default function InitialPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('20.1425%') }} showsVerticalScrollIndicator={false}>
        {/* Logo */}
        <View style={{ marginTop: hp("35.4962%"), justifyContent: 'center', alignSelf: 'center', }}>
          <Image source={require('../../../../assets/images/Logo.png')} style={{ width: wp('44.2708%'), height: hp('8.1425%') }} resizeMode='contain' />
        </View>
      </ScrollView>
      <TouchableOpacity style={usernamestyle.button}>
        <CustomButton
          width={wp('88.5417%')}
          height={hp('7.6336%')}
          title='Sign Up'
          backgroundColor={'#FEC946'}
          borderRadius={wp('2.6042%')}
          textAlign={'center'}
          fontSize={wp("4.1667%")}
          fontFamily='Manrope'
          color={"#000000"}
          onPress={() => navigation.navigate('RefferalCode')}

        />

        <TouchableOpacity style={styles.initialStyle} >
          <CustomButton
            width={wp('88.5417%')}
            height={hp('7.6336%')}
            title='Login'
            borderWidth={wp('0.5208%')}
            textAlign={'center'}
            fontSize={wp("4.1667%")}
            fontFamily='Manrope'
            color={"#000000"}
            borderRadius={wp('2.6042%')}
            onPress={() => navigation.navigate('LoginPage')}
            borderColor={"#ccc"}

          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },
  initialStyle:{ 
    marginTop: hp('2.5445%'), 
    marginBottom: hp('0%'), 
    alignSelf: 'center',
     justifyContent: 'center'
     }

});
