import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, Image, ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Images } from '../../../../constants/images/Images'
import CustomButton from '../../custom-component/custombutton/CustomButton';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';

export default function TellMoreProfile({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: hp('3.8168%') }}>
        <View style={{ marginTop: hp('5.0891%'), paddingLeft: wp('8.3333%') }}>
          <CustomArrow
            leftarrow={true}
            cl={true}
          />
        </View>

        <View style={{ marginTop: hp('4.0712%') }}>
          <Text style={{ fontWeight: '700', fontSize: wp('6.5%'), textAlign: 'center', fontFamily: 'Manrope' }}>tell us more</Text>
        </View>
        <View style={{ borderColor: "#FEC946", justifyContent: 'center', alignSelf: 'center', marginTop: hp('3.3079%'), width: wp('33.3333%'), height: hp('16.285%'), borderRadius: wp('16.1458%'), borderWidth: 1 }}>
          <Image source={Images['profile']} style={{ width: wp('31.2501%'), height: hp('15.2672%'), borderRadius: wp('13.0208%'), alignSelf: 'center' }} resizeMode='contain' />
        </View>
        <View style={{ marginTop: hp('6.1069%'), left: wp('5.2083%') }}>
          <Text style={{ color: "#06050599", fontSize: wp('4.1667%'), fontFamily: 'Manrope' }}>Add a description</Text>
        </View>
        <View style={{ borderColor: "#00000033", marginTop: hp('1.5267%'), justifyContent: 'center', alignSelf: 'center', borderWidth: wp('0.2604%'), width: wp('89.3229%'), height: hp('30.916%'), borderRadius: wp('4.1667%') }}>

        </View>
        <TouchableOpacity style={{ marginTop: hp('10.0509%'), alignSelf: 'center', justifyContent: 'center' }} onPress={()=>navigation.navigate('InitialScreen')}>
          <CustomButton
            width={wp('88.5417%')}
            height={hp('7.6336%')}
            title='Lets find nearby restaurants!'
            backgroundColor={'#FEC946'}
            borderRadius={wp('2.6042%')}
            textAlign={'center'}
            fontSize={wp("4.1667%")}
            color={"#000000"}
            fontFamily='Manrope'
            onPress={()=>navigation.navigate('InitialScreen')}

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
