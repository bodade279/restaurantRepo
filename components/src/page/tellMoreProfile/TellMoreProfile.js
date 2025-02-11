import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, Image, ScrollView,
  TextInput,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Images } from '../../../../constants/images/Images'
import CustomButton from '../../custom-component/custombutton/CustomButton';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import { ageStyles, usernamestyle } from '@/constants/styles/Styles';

export default function TellMoreProfile({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('8.1425%') }} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={ageStyles.arrowTouch} onPress={() => navigation.goBack()}>
          <CustomArrow
            leftarrow={true}
            cl={true}
            navigation={navigation}
          />
        </TouchableOpacity>

        <View style={{ marginTop: hp('15.2672%') }}>
          <Text style={{ fontWeight: '700', fontSize: wp('6.5%'), textAlign: 'center', fontFamily: 'Manrope' }}>tell us more</Text>
        </View>
        {/* <View style={{ borderColor: "#FEC946", justifyContent: 'center', alignSelf: 'center', marginTop: hp('3.3079%'), width: wp('33.3333%'), height: hp('16.285%'), borderRadius: wp('40.1458%'), borderWidth: wp('0.2056%') }}>
          <Image source={Images['profile']} style={{ width: wp('31.2501%'), height: hp('15.2672%'), borderRadius: wp('18.0208%'), alignSelf: 'center' }} resizeMode='contain' />
        </View> */}
        <View
          style={{
            borderColor: "#FEC946",
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: hp('3.3079%'),
            width: wp('33.3333%'),
            height: wp('33.3333%'), // Use the same value as width for perfect circle
            borderRadius: wp('33.3333%') / 2, // Half of the width/height
            borderWidth: wp('0.2056%'),
          }}
        >
          <Image
            source={Images['profile']}
            style={{
              width: wp('31.2501%'),
              height: wp('31.2501%'), // Match Image dimensions for consistency
              borderRadius: wp('31.2501%') / 2, // Half of the width/height for circle
              alignSelf: 'center',
            }}
            resizeMode='cover' // 'cover' for full containment inside the circle
          />
        </View>
        <View style={{ marginTop: hp('6.1069%'), left: wp('5.2083%') }}>
          <Text style={{ color: "#06050599", fontSize: wp('4.1667%'), fontFamily: 'Manrope' }}>Add a description</Text>
        </View>
        <TextInput
          style={{
            borderColor: "#00000033", marginTop: hp('1.5267%'), justifyContent: 'center', alignSelf: 'center', borderWidth: 1, width: wp('89.3229%'), height: hp('30%'), borderRadius: wp('4.1667%'), textAlignVertical: 'top', // Align text to the top vertically
            textAlign: 'left',        // Align text to the left horizontally
            padding: wp('4%'),        // Add padding for better readability
          }}
          multiline={true} // Ensure multiline input is enabled
        />
      </ScrollView>
      <TouchableOpacity style={usernamestyle.button} onPress={() => navigation.navigate('InitialScreen')}>
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
          onPress={() => navigation.navigate('Category')}

        />

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },

});
