import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, TextInput,
} from 'react-native';
import CustomButton from '../../custom-component/custombutton/CustomButton';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import { ageStyles } from '@/constants/styles/Styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function AgePage({navigation}) {
  const handleNavigation=()=>{
    navigation.navigate('TellMorePage')
  }

  return (
    <View style={ageStyles.container}>
      <ScrollView  contentContainerStyle={{flexGrow:1,paddingBottom:hp('8.1425%')}} showsVerticalScrollIndicator={false} >
        <TouchableOpacity style={{ marginTop: hp('9.1603%'), paddingLeft: wp('6.5%'), position: 'absolute' }}>
          <CustomArrow
            leftarrow={true}
            cl={true}
          />
        </TouchableOpacity>
        <View style={{justifyContent:'center',alignItems:'center'}}>

        <View style={ageStyles.subMain}>
          <Text style={ageStyles.textView}>What's your age?</Text>
        </View>
        <View style={ageStyles.textInputView}>
          <TextInput
            style={ageStyles.input}
            placeholder='Age'
            placeholderTextColor={'white'}
          />
        </View>
        <View style={ageStyles.textView1}>
          <Text style={ageStyles.text2}>This is to personalize your experience and will not be visible on your profile.</Text>
        </View>

        <TouchableOpacity style={{marginTop:hp('35%')}}>
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
      </ScrollView>
    </View>
  );
}


