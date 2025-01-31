import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, Image, ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Images } from '../../../../constants/images/Images'
import CustomButton from '../../custom-component/custombutton/CustomButton';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';

export default function TellMorePage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: hp('10%') }}>
        <View style={{ marginTop: hp('5.0891%'), paddingLeft: wp('8.3333%') }}>
          <CustomArrow
            leftarrow={true}
            cl={true}
          />
        </View>

        <View style={{ marginTop: hp('4.0712%') }}>
          <Text style={{ fontWeight: '700', fontSize: wp('6.25%'), textAlign: 'center', fontFamily: 'Manrope', color: '#060505' }}>Tell us more</Text>
        </View>
        <View style={{ justifyContent: 'center', alignSelf: 'center', marginTop: hp('5.9796%') }}>
          <Image source={Images['tellmore']} style={{ width: wp('35.1563%'), height: hp('17.1756%') }} resizeMode='contain' />
        </View>
        <View style={{ marginTop: hp('6.1069%'), left: wp('5.2083%') }}>
          <Text style={{ color: "#06050599", fontSize: wp('4.1667%'), fontFamily: 'Manrope' }}>Add a description</Text>
        </View>
        <View style={{ borderColor: "#00000033", marginTop: hp('1.5267%'), justifyContent: 'center', alignSelf: 'center', borderWidth: 1, width: wp('89.3229%'), height: hp('30%'), borderRadius: wp('4.1667%') }}>

        </View>
        <TouchableOpacity style={{

          position: 'absolute',
          top: hp('88%'),
          // paddingVertical: hp('1.5%'),

          alignSelf: 'center',
          justifyContent: 'center',
        }}>
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
            onPress={() => navigation.navigate('TellMoreProfile')}


          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },

});
