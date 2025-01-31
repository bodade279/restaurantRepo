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
      <ScrollView >
        <View style={ageStyles.main}>
          <CustomArrow
            leftarrow={true}
            cl={true}
          />
        </View>
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
            width={340}
            height={60}
            title='Continue'
            backgroundColor={'#FEC946'}
            borderRadius={10}
            textAlign={'center'}
            fontSize={16}
            fontFamily='Manrope'
            color={"#000000"}
            onPress={handleNavigation}

          />

        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}


