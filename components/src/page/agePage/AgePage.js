import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, TextInput,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Images } from '../../../../constants/images/Images'
import CustomButton from '../../custom-component/custombutton/CustomButton';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import { ageStyles } from '@/constants/styles/Styles';

export default function AgePage() {
  return (
    <View style={ageStyles.container}>
      <ScrollView contentContainerStyle={ageStyles.scrollContent}>
        <View style={ageStyles.main}>
          <CustomArrow
            leftarrow={true}
            cl={true}
          />
        </View>

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

        <TouchableOpacity style={ageStyles.touchableView}>
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
      </ScrollView>
    </View>
  );
}


